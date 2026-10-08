import { NextResponse } from "next/server";
import { siteConfig } from "@/site.config";

type Payload = Record<string, unknown>;

const text = (v: unknown) => String(v ?? "").trim().slice(0, 2000);

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Emails each application to the house. Uses Resend's HTTP API.
async function sendEmail(payload: Payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: "RESEND_API_KEY is not set" };

  const to = process.env.APPLY_TO_EMAIL || siteConfig.email;
  const from = process.env.APPLY_FROM_EMAIL || "Stepping Stone website <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Name", text(payload.name)],
    ["Phone", text(payload.phone)],
    ["Email", text(payload.email)],
    ["House", text(payload.location) || "Not sure yet"],
    ["Move-in date", text(payload.moveIn)],
    ["Sobriety date", text(payload.sobrietyDate)],
    ["How she'll cover rent", text(payload.income)],
    ["Emergency contact", text(payload.emergency)],
    ["Notes", text(payload.notes)],
  ];
  const filled = rows.filter(([, v]) => v);

  const applicantEmail = text(payload.email);
  const body = {
    from,
    to: [to],
    subject: `New application: ${text(payload.name)}`,
    ...(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail) ? { reply_to: applicantEmail } : {}),
    text: filled.map(([k, v]) => `${k}: ${v}`).join("\n") + "\n\nSent from the Apply form on the Stepping Stone website.",
    html:
      `<h2>New application from the website</h2><table cellpadding="6" style="border-collapse:collapse">` +
      filled
        .map(
          ([k, v]) =>
            `<tr><td style="vertical-align:top;color:#505a6c"><strong>${escapeHtml(k)}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`
        )
        .join("") +
      `</table>`,
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Email error ${res.status}: ${await res.text()}`);
  return { sent: true };
}

export async function POST(req: Request) {
  let payload: Payload;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return new NextResponse("Invalid request", { status: 400 });
  }

  // Honeypot field: real applicants never fill it in.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = text(payload.name);
  const phoneDigits = text(payload.phone).replace(/\D/g, "");
  if (!name || phoneDigits.length < 10) {
    return new NextResponse("Name and a 10-digit phone number are required", { status: 400 });
  }

  try {
    const email = await sendEmail(payload);
    // Never tell an applicant we have her application when it reached nobody.
    if (!email.sent) {
      if (process.env.NODE_ENV === "production") {
        console.error("Application not delivered:", email.reason);
        return new NextResponse("Submission could not be delivered", { status: 503 });
      }
      console.log("Application (email not configured, development only):", payload);
    }
    return NextResponse.json({ ok: true, sent: email.sent });
  } catch (err) {
    console.error("Application email failed:", err);
    return new NextResponse("Submission failed", { status: 500 });
  }
}
