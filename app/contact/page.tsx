
"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("idle");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setStatusMessage(
        "Your message has been sent successfully. We'll get back to you as soon as possible."
      );

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
      setStatusMessage(
        "We couldn't send your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="bg-white">
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          {/* =====================================================
              INTRO + VISUAL
          ====================================================== */}
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* LEFT — CONTENT */}
            <div>

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-cyan-700" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Contact us
                </p>
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Let&apos;s solve your
                <span className="block text-cyan-700">
                  technology challenge.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Tell us about your business, your current technology
                challenges, or what you&apos;re trying to build. We&apos;ll
                help you identify a practical path forward.
              </p>

              

            </div>

            {/* RIGHT — VISUAL SUPPORT */}
            <div className="relative">

              {/* Technical frame */}
              <div className="absolute -inset-3 border border-slate-200" />

              {/* Cyan corner */}
              <div className="absolute -right-3 -top-3 z-10 h-20 w-20 border-r-2 border-t-2 border-cyan-700" />

              <div className="relative aspect-[4/3] overflow-hidden border border-slate-200 bg-slate-100">

                <Image
                  src="/contact.png"
                  alt="Xcode technology solutions"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

              </div>

            </div>

          </div>

          {/* =====================================================
              FORM
          ====================================================== */}
          <div className="mt-24 border-t border-slate-200 pt-16 lg:mt-32">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

              {/* Form intro */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Start a conversation
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Tell us what you&apos;re working on.
                </h2>

                <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                  Give us a little context and we&apos;ll get back to you
                  to discuss your requirements and the right way forward.
                </p>

                {/* Small reassurance */}
                <div className="mt-8 border-l-2 border-cyan-700 pl-4">
                  <p className="text-sm font-semibold text-slate-800">
                    Your enquiry goes directly to our team.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We&apos;ll review your message and respond as soon as
                    possible.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="relative border border-slate-200 bg-slate-50 p-7 sm:p-9">

                {/* Corner accent */}
                <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-cyan-700" />

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-slate-700"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        autoComplete="name"
                        disabled={isSending}
                        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-700"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        autoComplete="email"
                        disabled={isSending}
                        className="mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-100"
                      />
                    </div>

                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-semibold text-slate-700"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      autoComplete="organization"
                      disabled={isSending}
                      className="mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="text-sm font-semibold text-slate-700"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      disabled={isSending}
                      className="mt-2 w-full border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Cybersecurity">
                        Cybersecurity
                      </option>

                      <option value="Cloud & Infrastructure">
                        Cloud & Infrastructure
                      </option>

                      <option value="IT & Technical Services">
                        IT & Technical Services
                      </option>

                      <option value="Software Engineering">
                        Software Engineering
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700"
                    >
                      How can we help?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your technology challenge..."
                      required
                      disabled={isSending}
                      className="mt-2 w-full resize-none border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-cyan-700 focus:ring-1 focus:ring-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group inline-flex w-full items-center justify-center gap-3 bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? (
                      <>
                        <span>Sending...</span>

                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      </>
                    ) : (
                      <>
                        <span>Send enquiry</span>

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  {/* Success / Error */}
                  {status !== "idle" && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`border px-4 py-4 text-sm leading-6 ${
                        status === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : "border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      <div className="flex items-start gap-3">

                        <span className="mt-0.5 font-bold">
                          {status === "success" ? "✓" : "!"}
                        </span>

                        <div>
                          <p className="font-semibold">
                            {status === "success"
                              ? "Message sent"
                              : "Message not sent"}
                          </p>

                          <p className="mt-1">
                            {statusMessage}
                          </p>
                        </div>

                      </div>
                    </div>
                  )}

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

