"use client";

import { BriefcaseBusiness, GitBranch, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const contactDetails = [
  {
    label: "Email",
    value: "angemoudzouma@gmail.com",
    href: "mailto:angemoudzouma@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+33745269919",
    href: "tel:+33745269919",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ange-moudzouma",
    href: "https://www.linkedin.com/in/ange-moudzouma/",
    icon: BriefcaseBusiness,
  },
  {
    label: "GitHub",
    value: "github.com/ange-tec",
    href: "https://github.com/ange-tec",
    icon: GitBranch,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("Ready to send");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("Please complete all fields.");
      return;
    }

    const subject = `Portfolio contact from ${trimmedName}`;
    const body = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      "Message:",
      trimmedMessage,
    ].join("\n");

    setStatus("Opening your email app...");
    window.location.href = `mailto:angemoudzouma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="rounded-[32px] border border-violet-500/20 bg-slate-950/80 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.72)] sm:p-8 lg:p-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-violet-300">Contact</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build something meaningful together.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
            <MapPin className="h-4 w-4 text-violet-300" />
            Available for internships, consulting, and digital projects
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactDetails.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition hover:border-violet-500/40 hover:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{label}</p>
                  <p className="mt-1 text-sm text-slate-100 group-hover:text-white">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-slate-200">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-slate-400">Name</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                  required
                />
              </label>

              <label className="block text-sm text-slate-200">
                <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-slate-400">Email</span>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                  required
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-slate-200">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-slate-400">Message</span>
              <textarea
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                required
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>

              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
