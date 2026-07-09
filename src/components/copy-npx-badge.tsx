"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

export function CopyNpxBadge() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx vishnuu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex w-fit items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Copy npx command"
    >
      <Terminal className="size-3" />
      <span>npx vishnuu</span>
      {copied ? (
        <Check className="size-3 text-green-500" />
      ) : (
        <Copy className="size-3 opacity-50 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}
