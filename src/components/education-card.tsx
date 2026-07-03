"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function EducationCard({ education }: { education: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={cn("flex flex-col gap-2", education.description && "cursor-pointer")} 
      onClick={() => education.description && setExpanded(!expanded)}
    >
      <div className="flex items-center gap-x-3 justify-between group">
        <div className="flex items-center gap-x-3 flex-1 min-w-0">
          {education.logoUrl ? (
            <img
              src={education.logoUrl}
              alt={education.school}
              className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
            />
          ) : (
            <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
          )}
          <div className="flex-1 min-w-0 flex flex-col gap-0.5">
            <div className="font-semibold leading-none flex items-center gap-2">
              {education.href ? (
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 hover:underline"
                >
                  {education.school}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                </Link>
              ) : (
                <span>{education.school}</span>
              )}
            </div>
            <div className="font-sans text-sm text-muted-foreground">
              {education.degree}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
          <span>
            {education.start} - {education.end}
          </span>
          {education.description && (
            <ChevronRight className={cn("h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground ml-1", expanded && "rotate-90")} />
          )}
        </div>
      </div>
      {expanded && education.description && (
        <div className="font-sans text-xs text-muted-foreground mt-1 text-pretty max-w-[500px] italic pl-11 md:pl-13">
          {education.description}
        </div>
      )}
    </div>
  );
}
