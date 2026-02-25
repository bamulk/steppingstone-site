"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplyPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Something went wrong.");
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="kicker">Apply</div>
        <h1 className="h1" style={{ marginTop: 10 }}>Apply for a bed</h1>
        <p className="lead" style={{ marginTop: 14, maxWidth: 860 }}>
          Fill this out and we&apos;ll follow up quickly. For the fastest response, call or text now.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a>
          <a className="btn" href={`sms:${siteConfig.smsTel}`} style={{ background: "var(--forest)", color: "white", borderColor: "transparent", boxShadow: "0 12px 24px rgba(38,55,27,.16)" }}>
            Text
          </a>
        </div>

        <div className="grid grid-2" style={{ marginTop: 18, alignItems: "start" }}>
          <form className="card" style={{ padding: 18 }} onSubmit={onSubmit}>
            <div className="kicker">Basic info</div>
            <div className="grid" style={{ marginTop: 12 }}>
              <div>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" required placeholder="John Doe" />
              </div>

              <div className="grid grid-2">
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" required placeholder="(916) 555-0123" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="name@email.com" />
                </div>
              </div>

              <div className="grid grid-2">
                <div>
                  <label htmlFor="moveIn">Desired move-in date</label>
                  <input id="moveIn" name="moveIn" type="date" />
                </div>
                <div>
                  <label htmlFor="location">Preferred location</label>
                  <select id="location" name="location" defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option value="Carmichael">Carmichael</option>
                    <option value="Citrus Heights">Citrus Heights</option>
                    <option value="Fair Oaks">Fair Oaks</option>
                    <option value="Arden-Arcade">Arden-Arcade</option>
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-2">
                <div>
                  <label htmlFor="sobrietyDate">Current sobriety date</label>
                  <input id="sobrietyDate" name="sobrietyDate" type="date" />
                </div>
                <div>
                  <label htmlFor="income">Monthly income source</label>
                  <input id="income" name="income" placeholder="Work, savings, family support, etc." />
                </div>
              </div>

              <div>
                <label htmlFor="emergency">Emergency contact (name + phone)</label>
                <input id="emergency" name="emergency" placeholder="Jane Doe (916) 555-0000" />
              </div>

              <div>
                <label htmlFor="notes">Anything we should know?</label>
                <textarea id="notes" name="notes" rows={4} placeholder="Brief background, schedule, special needs, etc." />
              </div>
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === "submitting"}
              style={{ marginTop: 14, width: "100%" }}
            >
              {status === "submitting" ? "Submitting…" : "Submit application"}
            </button>

            {status === "success" && (
              <div className="badge" style={{ marginTop: 12, background: "rgba(38,55,27,.10)" }}>
                ✓ Submitted. We&apos;ll reach out shortly.
              </div>
            )}
            {status === "error" && (
              <div className="badge" style={{ marginTop: 12, background: "rgba(184,115,51,.12)" }}>
                ⚠ {error}
              </div>
            )}

            <div className="small" style={{ marginTop: 12 }}>
              By submitting, you agree to be contacted about availability and program fit.
            </div>
          </form>

          <div className="card" style={{ padding: 18 }}>
            <div className="kicker">Before you apply</div>
            <div style={{ fontWeight: 950, fontSize: 18, marginTop: 8 }}>This program requires:</div>
            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              {[
                "A sponsor within 10 days of moving in",
                "3 meetings per week",
                "Weekly house meeting attendance",
                "Chores and cleanliness",
                "Respectful, cooperative living",
              ].map((x) => (
                <div key={x} className="small">✓ {x}</div>
              ))}
            </div>

            <div style={{ marginTop: 16, padding: 14, borderRadius: 16, background: "rgba(200,164,75,.14)", border: "1px solid rgba(200,164,75,.25)" }}>
              <div style={{ fontWeight: 950 }}>Need help right now?</div>
              <div className="small" style={{ marginTop: 6 }}>
                Call or text and we&apos;ll quickly confirm fit and availability.
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btn-primary" href={`tel:${siteConfig.phoneTel}`}>Call</a>
                <a className="btn" href={`sms:${siteConfig.smsTel}`} style={{ background: "var(--forest)", color: "white", borderColor: "transparent" }}>
                  Text
                </a>
              </div>
            </div>

            <div className="small" style={{ marginTop: 16 }}>
              Not a medical facility. If you are in crisis or need immediate medical help, call 911.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
