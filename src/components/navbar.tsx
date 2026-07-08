import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import {
  FolderGit2,
  GitMerge,
  Trophy,
} from "lucide-react";

const SECTION_LINKS = [
  { href: "#projects",     icon: FolderGit2, label: "Projects"     },
  { href: "#open-source",  icon: GitMerge,   label: "Open Source"  },
  { href: "#achievements", icon: Trophy,     label: "Achievements" },
];

const iconClass =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

const tooltipClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">

        {/* ── Page links (Home, Resume) ── */}
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http") || (item as any).external;
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <DockIcon className={iconClass}>
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        {/* ── Section navigation ── */}
        {SECTION_LINKS.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <a href={item.href}>
                <DockIcon className={iconClass}>
                  <item.icon className="size-4 m-auto" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
              <p>{item.label}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />

        {/* ── Theme toggle ── */}
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={iconClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>

      </Dock>
    </div>
  );
}
