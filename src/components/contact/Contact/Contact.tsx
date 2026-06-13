"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck, FiMail } from "react-icons/fi";
import { SITE } from "@/lib/site";
import styles from "./Contact.module.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactProps {
  /** Adds top clearance for the fixed navbar when Contact leads a page. */
  lead?: boolean;
}

type SubmitStatus = "idle" | "sending" | "sent" | "error";

const Contact = ({ lead = false }: ContactProps) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address";
    if (!form.message.trim()) next.message = "Tell us a little about your idea";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New project request from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={`section ${lead ? styles.lead : ""}`} id="contact">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.kicker}>Talk to our expert</span>
            <h2 className={styles.title}>
              Have an idea? Let&apos;s build it together.
            </h2>
            <p className={styles.leadText}>
              Short, focused and free. Tell us what you need and we will get back
              within one business day with next steps.
            </p>
            <a href={`mailto:${SITE.email}`} className={styles.mail}>
              <FiMail />
              {SITE.email}
            </a>
          </div>

          {status === "sent" ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon}>
                <FiCheck />
              </span>
              <h3>Request received</h3>
              <p>
                Thanks {form.name.split(" ")[0] || "there"} - our team will reach
                out shortly.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Project idea</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="A custom AI workflow that..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message}</span>
                )}
              </div>

              {status === "error" && (
                <span className={styles.error} role="alert">
                  Something went wrong sending your request. Please try again or
                  email us directly.
                </span>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submit}`}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit request"}
                <FiArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
