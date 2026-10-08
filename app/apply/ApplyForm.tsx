"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/site.config";

type Status = "idle" | "submitting" | "success" | "error";

export function ApplyForm({
  defaultHome,
  homeNames,
}: {
  defaultHome: string;
  homeNames: { name: string; forWho: string }[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");
  const [firstName, setFirstName] = useState("");
  const thanksRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const digits = String(payload.phone ?? "").replace(/\D/g, "");
    if (digits.length < 10) {
      setPhoneError("Please enter a 10-digit phone number so we can reach you.");
      form.querySelector<HTMLInputElement>("#phone")?.focus();
      return;
    }
    setPhoneError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Submission failed");
      setFirstName(String(payload.name ?? "").trim().split(/\s+/)[0] ?? "");
      setStatus("success");
      requestAnimationFrame(() => thanksRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="thanks" ref={thanksRef} tabIndex={-1} role="status">
        <h2 className="title">We have your application.</h2>
        <div className="prose">
          <p>Thank you{firstName ? `, ${firstName}` : ""}. We&apos;ll call or text you back at the number you gave us.</p>
          <p>
            If you need a bed soon, don&apos;t wait on us. Call or text <a className="phone" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>.
          </p>
        </div>
        <div className="actions">
          <a className="btn btn--primary" href={`tel:${siteConfig.phoneTel}`}>Call {siteConfig.phoneDisplay}</a>
          <a className="btn btn--plain" href={`sms:${siteConfig.smsTel}`}>Text us</a>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form-section">About you</h2>
      <div className="fieldset">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>

      <div className="form-row">
        <div className="fieldset">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
            onChange={() => phoneError && setPhoneError("")}
          />
          {phoneError && <span id="phone-error" className="field-error">{phoneError}</span>}
        </div>
        <div className="fieldset">
          <label htmlFor="email">Email <span className="hint">(optional)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
      </div>

      <h2 className="form-section">Your stay</h2>
      <div className="form-row">
        <div className="fieldset">
          <label htmlFor="location">Which house? <span className="hint">(optional)</span></label>
          <select id="location" name="location" defaultValue={defaultHome}>
            <option value="">Not sure yet</option>
            {homeNames.map((h) => (
              <option key={h.name} value={h.name}>
                {h.name} ({h.forWho.replace(/^For /, "")})
              </option>
            ))}
          </select>
        </div>
        <div className="fieldset">
          <label htmlFor="moveIn">When would you like to move in? <span className="hint">(optional)</span></label>
          <input id="moveIn" name="moveIn" type="date" />
        </div>
      </div>

      <div className="form-row">
        <div className="fieldset">
          <label htmlFor="sobrietyDate">Sobriety date <span className="hint">(optional)</span></label>
          <input id="sobrietyDate" name="sobrietyDate" type="date" />
        </div>
        <div className="fieldset">
          <label htmlFor="income">How will you cover rent? <span className="hint">(optional)</span></label>
          <input id="income" name="income" placeholder="Work, savings, family support…" autoComplete="off" />
        </div>
      </div>

      <h2 className="form-section">Anything else</h2>
      <div className="fieldset">
        <label htmlFor="emergency">Emergency contact <span className="hint">(optional, name and phone)</span></label>
        <input id="emergency" name="emergency" />
      </div>

      <div className="fieldset">
        <label htmlFor="notes">Anything you&apos;d like us to know? <span className="hint">(optional)</span></label>
        <textarea id="notes" name="notes" rows={4} placeholder="Where you're coming from, children, your schedule, questions…" />
      </div>

      {/* Left empty by people; filled by bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="form-alert" role="alert">
          Your application didn&apos;t go through. Nothing you typed is lost, so please try sending it again, or call or text us at{" "}
          <a className="phone" href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>.
        </p>
      )}

      <button className="btn btn--primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send my application"}
      </button>
      <p className="quiet">By sending this, you agree that we may call or text you about openings and next steps.</p>
    </form>
  );
}
