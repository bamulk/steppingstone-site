import { NextResponse } from "next/server";

type Payload = Record<string, unknown>;

async function sendToAirtable(payload: Payload) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Leads";

  if (!apiKey || !baseId) return { sent: false, reason: "Airtable env vars not set" };

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  // Map payload into Airtable fields. Customize as needed.
  const fields: Record<string, any> = {
    Name: payload.name ?? "",
    Phone: payload.phone ?? "",
    Email: payload.email ?? "",
    "Move-in Date": payload.moveIn ?? "",
    "Preferred Location": payload.location ?? "",
    "Sobriety Date": payload.sobrietyDate ?? "",
    "Income Source": payload.income ?? "",
    "Emergency Contact": payload.emergency ?? "",
    Notes: payload.notes ?? "",
    Source: "Website Apply Form",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ records: [{ fields }] }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable error: ${text}`);
  }

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

  const name = String(payload.name ?? "").trim();
  const phoneDigits = String(payload.phone ?? "").replace(/\D/g, "");
  if (!name || phoneDigits.length < 10) {
    return new NextResponse("Name and a 10-digit phone number are required", { status: 400 });
  }

  // Always log (useful if Airtable isn't configured yet)
  console.log("New lead submission:", payload);

  try {
    const airtable = await sendToAirtable(payload);
    // Never tell an applicant we have her application when it reached nobody.
    if (!airtable.sent && process.env.NODE_ENV === "production") {
      console.error("Lead not delivered:", airtable.reason);
      return new NextResponse("Submission could not be delivered", { status: 503 });
    }
    return NextResponse.json({ ok: true, airtable });
  } catch (err: any) {
    console.error("Lead submission failed:", err);
    return new NextResponse("Submission failed", { status: 500 });
  }
}
