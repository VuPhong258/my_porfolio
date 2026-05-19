"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/animations/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: MapPin, label: "Location", value: SITE_CONFIG.location, href: "" },
] as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding section-alt"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <SectionHeading
          headingId="contact-heading"
          label="Contact"
          title="Let's work together"
          description="I'm available for internship and fresher full-stack developer opportunities."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn blur delay={0.04}>
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Direct contact</h3>
              <div className="mt-6 space-y-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <span className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-left transition-colors hover:border-violet-500/25">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" aria-hidden />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                          {label}
                        </span>
                        <span className="mt-1 block break-words text-sm text-zinc-200">
                          {value}
                        </span>
                      </span>
                    </span>
                  );

                  return href ? (
                    <a key={label} href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn blur delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <fieldset className="space-y-6" disabled={submitted}>
                <legend className="sr-only">Contact form</legend>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" autoComplete="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Internship / job opportunity" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell me about the role or project..." required rows={5} />
                </div>
              </fieldset>

              {submitted ? (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3.5 text-center text-sm leading-relaxed text-violet-200"
                >
                  Thanks for your message! This is a demo form. Please email{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-medium text-violet-300 underline underline-offset-2 hover:text-white"
                  >
                    {SITE_CONFIG.email}
                  </a>{" "}
                  for real inquiries.
                </p>
              ) : (
                <Button type="submit" className="mt-6 w-full rounded-xl" size="lg">
                  <Send className="h-4 w-4" aria-hidden />
                  Send Message
                </Button>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
