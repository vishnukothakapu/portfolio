import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { GitMerge, GitPullRequest, ExternalLink } from "lucide-react";

type Contribution = (typeof DATA.openSourceContributions)[number];

function groupByRepo(contributions: readonly Contribution[]) {
  const map = new Map<string, Contribution[]>();
  for (const c of contributions) {
    if (!map.has(c.repo)) map.set(c.repo, []);
    map.get(c.repo)!.push(c);
  }
  return Array.from(map.entries());
}

/** Split "org/repo" into two parts for styled display */
function splitRepo(repo: string) {
  const idx = repo.indexOf("/");
  if (idx === -1) return { org: "", name: repo };
  return { org: repo.slice(0, idx + 1), name: repo.slice(idx + 1) };
}

export default function OpenSourceSection() {
  const grouped = groupByRepo(DATA.openSourceContributions);

  return (
    <section id="open-source" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Open Source</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              I contribute to open source
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Actively contributing to the cloud-native ecosystem Kubernetes,
              chaos engineering, and identity platforms.
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {grouped.map(([repo, prs]) => {
            const { org, name } = splitRepo(repo);
            const mergedCount = prs.filter((p) => p.status === "merged").length;

            return (
              <div
                key={repo}
                className="group relative flex flex-col rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* ── Card header ── */}
                <div className="flex items-start justify-between gap-3 px-5 pt-4 pb-3 border-b border-border/60">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="shrink-0 rounded-lg bg-muted p-1.5">
                      <Icons.github className="size-4 text-foreground/80" />
                    </div>
                    <Link
                      href={prs[0].repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 group/link"
                    >
                      <p className="text-xs text-muted-foreground font-medium leading-none mb-0.5">
                        {org}
                      </p>
                      <p className="text-sm font-semibold text-foreground group-hover/link:text-purple-500 dark:group-hover/link:text-purple-400 transition-colors truncate leading-none">
                        {name}
                      </p>
                    </Link>
                  </div>

                  {/* PR count pill */}
                  <span className="shrink-0 mt-0.5 inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground tabular-nums">
                    {prs.length}&nbsp;PR{prs.length > 1 ? "s" : ""}
                  </span>
                </div>

                {/* ── PR list ── */}
                <ul className="flex-1 divide-y divide-border/60 pl-3 pr-0">
                  {prs.map((pr) => (
                    <li
                      key={pr.pr}
                      className="flex items-start gap-2.5 px-3 py-3 hover:bg-muted/40 transition-colors"
                    >
                      {/* Status icon */}
                      <span className="mt-0.5 shrink-0">
                        {pr.status === "merged" ? (
                          <GitMerge className="size-3.5 text-purple-500" />
                        ) : (
                          <GitPullRequest className="size-3.5 text-emerald-500" />
                        )}
                      </span>

                      {/* Description */}
                      <p className="flex-1 text-xs text-foreground/80 leading-relaxed font-mono break-words">
                        {pr.description}
                      </p>

                      {/* PR number badge + external link */}
                      <Link
                        href={pr.prUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 ml-1 flex items-center gap-1 rounded-md border border-border/70 bg-muted/60 hover:bg-muted hover:border-purple-500/40 hover:text-purple-500 dark:hover:text-purple-400 px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground transition-colors"
                      >
                        {pr.pr}
                        <ExternalLink className="size-2.5" />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* ── Footer ── */}
                <div className="flex items-center gap-2 px-5 py-2.5 border-t border-border/60 bg-muted/20">
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-[11px] font-semibold text-purple-600 dark:text-purple-400 ring-1 ring-inset ring-purple-500/20">
                    <GitMerge className="size-3" />
                    {mergedCount} merged
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
