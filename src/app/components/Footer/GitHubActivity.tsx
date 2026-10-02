"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";

type ContributionDay = {
  date: string;
  level: number;
};

const levelColors = ["bg-white/10", "bg-[#195c35]", "bg-[#238636]", "bg-[#2ea043]", "bg-[#56d364]"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function contributionCalendar(days: ContributionDay[]) {
  const dayMap = new Map(days.map((day) => [day.date, day.level]));
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - 364 - end.getUTCDay());

  return Array.from({ length: 53 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + week * 7 + day);
      const key = dateKey(date);

      return { date: key, level: dayMap.get(key) ?? 0 };
    })
  );
}

function monthLabel(week: { date: string }[]) {
  const monthStart = week.find((day) => new Date(`${day.date}T00:00:00Z`).getUTCDate() === 1);
  if (!monthStart) return "";

  const date = new Date(`${monthStart.date}T00:00:00Z`);
  return new Intl.DateTimeFormat("en", { month: "short" }).format(date);
}

export default function GitHubActivity() {
  const [days, setDays] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const weeks = useMemo(() => contributionCalendar(days), [days]);
  const contributions = days.filter((day) => day.level > 0).length;

  useEffect(() => {
    let active = true;

    const loadActivity = async () => {
      try {
        const response = await fetch("/api/github-activity", { cache: "no-store" });
        if (!response.ok) throw new Error("GitHub activity is unavailable");

        const data = (await response.json()) as { days?: ContributionDay[]; totalContributions?: number | null };
        if (!data.days?.length) throw new Error("GitHub returned no activity");

        if (active) {
          setDays(data.days);
          setTotalContributions(data.totalContributions ?? null);
          setStatus("ready");
        }
      } catch {
        if (active) setStatus("error");
      }
    };

    void loadActivity();
    const refresh = window.setInterval(() => void loadActivity(), 5 * 60_000);

    return () => {
      active = false;
      window.clearInterval(refresh);
    };
  }, []);

  return (
    <section className="mx-auto mt-8 w-full max-w-4xl rounded-2xl border border-white/20 bg-[#07161d]/95 p-5 shadow-2xl shadow-black/40 sm:mt-10 sm:p-6" aria-labelledby="github-activity-title">
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-white text-black">
            <GitBranch className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p id="github-activity-title" className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/65">
              GitHub activity
            </p>
            <p className="mt-1 text-sm text-white/50">
              {status === "ready" ? totalContributions !== null ? `${totalContributions.toLocaleString()} contributions in the last year` : `${contributions} active days in the last year` : status === "error" ? "GitHub is temporarily unavailable — retrying soon" : "Syncing your GitHub activity"}
            </p>
          </div>
        </div>
        <a href="https://github.com/ShrivastvAryan" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-[#f3a08b]">
          Profile <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-white/35 sm:hidden">Swipe to explore the year</p>
      <div className="mt-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-5 sm:overflow-hidden sm:pb-0">
        <div className="min-w-[620px] sm:min-w-0 sm:w-full">
          <div className="ml-8 grid gap-[3px] text-[0.55rem] font-bold text-white/45" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}>
            {weeks.map((week, index) => <span key={index}>{monthLabel(week)}</span>)}
          </div>
          <div className="mt-2 flex gap-2">
            <div className="grid w-6 grid-rows-7 gap-[3px] pt-px text-[0.5rem] font-bold text-white/45">
              {weekDays.map((day) => <span key={day}>{day === "Sun" || day === "Tue" || day === "Thu" || day === "Sat" ? "" : day}</span>)}
            </div>
            <div
              className="grid flex-1 gap-[3px]"
              style={{
                gridAutoFlow: "column",
                gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                gridTemplateRows: "repeat(7, minmax(0, 1fr))",
              }}
            >
              {weeks.flatMap((week) => week).map((day) => (
                <span
                  key={day.date}
                  title={`${day.date}: ${day.level === 0 ? "no" : "some"} contributions`}
                  className={`aspect-square rounded-[2px] ${status === "ready" ? levelColors[day.level] : "animate-pulse bg-white/10"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-1.5 text-[0.55rem] font-bold uppercase tracking-[0.12em] text-white/45">
        <span>Less</span>
        {levelColors.map((color, index) => <span key={index} className={`size-2.5 rounded-[2px] ${color}`} />)}
        <span>More</span>
      </div>
    </section>
  );
}
