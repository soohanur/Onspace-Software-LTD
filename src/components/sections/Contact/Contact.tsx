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

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // In production this would POST to an API route / CRM.
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.kicker}>Talk to our expert</span>
            <h2 className={styles.title}>
              Have an idea? Let&apos;s build it together.
            </h2>
            <p className={styles.lead}>
              Short, focused and free. Tell us what you need and we will get back
              within one business day with next steps.
            </p>
            <a href={`mailto:${SITE.email}`} className={styles.mail}>
              <FiMail />
              {SITE.email}
            </a>
          </div>

          {submitted ? (
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

              <button type="submit" className={`btn btn-primary ${styles.submit}`}>
                Submit request
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
