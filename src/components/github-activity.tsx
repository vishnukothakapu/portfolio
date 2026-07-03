"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GithubActivity({ username }: { username: string }) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[150px] w-full animate-pulse bg-muted rounded-xl"></div>;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="flex w-full justify-center items-center [&_svg]:max-w-full [&_svg]:h-auto">
      <GitHubCalendar
        username={username}
        colorScheme={isDark ? "dark" : "light"}
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}
