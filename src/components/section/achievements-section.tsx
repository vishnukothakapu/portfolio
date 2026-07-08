/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { Trophy, Star } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  star: Star,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Milestones &amp; wins
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Hackathon victories, open source recognition, and other highlights along the way.
            </p>
          </div>
        </div>

        {/* ── Achievement cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.achievements.map((achievement) => {
            const a = achievement as any;
            const Icon = iconMap[a.icon as keyof typeof iconMap] ?? Trophy;

            return (
              <div
                key={achievement.title}
                className="group flex flex-col rounded-2xl border bg-card shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >

                {/* ── Card body ── */}
                <div className="flex items-start gap-4 p-5 flex-1">
                  {/* Logo circle */}
                  {a.logo ? (
                    <img
                      src={a.logo}
                      alt={`${achievement.title} logo`}
                      className="shrink-0 mt-0.5 size-10 rounded-full border border-border/60 object-cover"
                      style={{ backgroundColor: a.logoBg ?? "transparent" }}
                    />
                  ) : (
                    <div className="shrink-0 mt-0.5 flex items-center justify-center size-10 rounded-full bg-muted border border-border/60">
                      <Icon className="size-5 text-foreground/70" />
                    </div>
                  )}

                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <h3 className="font-semibold text-sm leading-snug">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">{achievement.dates}</span>
                      <span className="text-muted-foreground/40 text-xs">·</span>
                      <span className="text-xs text-muted-foreground">{achievement.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* ── Footer with links ── */}
                {achievement.links && achievement.links.length > 0 && (
                  <div className="flex items-center gap-2 px-5 py-3 border-t border-border/60 bg-muted/20">
                    {achievement.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
