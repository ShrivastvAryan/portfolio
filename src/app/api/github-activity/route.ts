const GITHUB_USERNAME = "ShrivastvAryan";

export const dynamic = "force-dynamic";

type ContributionDay = {
  date: string;
  level: number;
};

type GitHubGraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              date: string;
              contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
            }>;
          }>;
        };
      };
    };
  };
};

const contributionLevel = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} as const;

function getDateRange() {
  const end = new Date();
  const start = new Date(end);
  start.setDate(end.getDate() - 364);

  return {
    from: start.toISOString().slice(0, 10),
    to: end.toISOString().slice(0, 10),
  };
}

function parseContributionDays(markup: string) {
  const dayTags = markup.match(/<(?:td|rect)\b[^>]*>/g) ?? [];

  return dayTags.flatMap((tag): ContributionDay[] => {
    const date = tag.match(/data-date="([^"]+)"/)?.[1];
    const level = tag.match(/data-level="(\d)"/)?.[1];

    if (!date || level === undefined) return [];
    return [{ date, level: Number(level) }];
  });
}

async function getTokenCalendar(from: string, to: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2026-03-10",
    },
    body: JSON.stringify({
      query: `query ContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays { date contributionLevel }
              }
            }
          }
        }
      }`,
      variables: {
        login: GITHUB_USERNAME,
        from: `${from}T00:00:00Z`,
        to: `${to}T23:59:59Z`,
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) return null;

  const result = (await response.json()) as GitHubGraphQLResponse;
  const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) return null;

  return {
    totalContributions: calendar.totalContributions,
    days: calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        level: contributionLevel[day.contributionLevel],
      }))
    ),
  };
}

async function getPublicCalendar(from: string, to: string) {
  const startYear = Number(from.slice(0, 4));
  const endYear = Number(to.slice(0, 4));
  const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

  const calendars = await Promise.all(
    years.map(async (year) => {
      const response = await fetch(
        `https://github.com/users/${GITHUB_USERNAME}/contributions?from=${year}-01-01&to=${year}-12-31`,
        {
          headers: { Accept: "text/html", "User-Agent": "Aryan-Shrivastava-Portfolio" },
          next: { revalidate: 300 },
        }
      );

      if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
      return parseContributionDays(await response.text());
    })
  );

  return calendars
    .flat()
    .filter((day) => day.date >= from && day.date <= to);
}

export async function GET() {
  const { from, to } = getDateRange();

  try {
    const tokenCalendar = await getTokenCalendar(from, to);
    const days = tokenCalendar?.days ?? (await getPublicCalendar(from, to));
    if (!days.length) throw new Error("GitHub returned an empty contribution calendar");

    return Response.json(
      {
        days,
        totalContributions: tokenCalendar?.totalContributions ?? null,
      },
      {
        headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
      }
    );
  } catch {
    return Response.json(
      { days: [], error: "GitHub activity is temporarily unavailable" },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }
}
