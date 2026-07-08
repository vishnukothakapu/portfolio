"use client";

import Link from "next/link";
import { useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Copy, Check, Mail } from "lucide-react";

const EMAIL = DATA.contact.email;

const SOCIALS = [
  DATA.contact.social.GitHub,
  DATA.contact.social.LinkedIn,
  DATA.contact.social.X,
  DATA.contact.social.Leetcode,
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="border rounded-xl p-10 relative overflow-hidden">
      {/* Section pill */}
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      {/* Flickering grid bg */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center">
        {/* ── Availability badge ── */}
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-600 dark:text-green-400">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          Open to Internships &amp; Full-time Roles
        </div>

        {/* ── Heading ── */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground text-balance">
            Want to chat? Shoot me a DM{" "}
            <Link
              href={DATA.contact.social.X.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline underline-offset-4 rounded-sm"
            >
              on Twitter
            </Link>{" "}
            or drop me an email — I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        {/* ── Email copy button ── */}
        <button
          onClick={handleCopy}
          className="group inline-flex items-center gap-2.5 rounded-xl border border-border bg-card hover:bg-muted px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:shadow-md active:scale-95"
        >
          <Mail className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span>{EMAIL}</span>
          <span className="ml-1 flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
            {copied ? (
              <Check className="size-4 text-green-500" />
            ) : (
              <Copy className="size-4" />
            )}
          </span>
        </button>
        {copied && (
          <p className="text-xs text-green-500 -mt-3 animate-in fade-in slide-in-from-bottom-1 duration-200">
            Copied to clipboard!
          </p>
        )}

        {/* ── Social icon row ── */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {SOCIALS.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex items-center justify-center size-10 rounded-xl border border-border bg-card hover:bg-muted hover:border-foreground/20 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-muted-foreground hover:text-foreground"
            >
              <social.icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
