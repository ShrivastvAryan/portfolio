import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aryan Shrivastava | Full Stack Developer & Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          border: "1px solid #222222",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#a1a1aa",
                fontWeight: 600,
              }}
            >
              Available for Opportunities
            </span>
          </div>
          <span
            style={{
              fontSize: "20px",
              color: "#71717a",
              letterSpacing: "0.05em",
            }}
          >
            aryanshrivastava.dev
          </span>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              margin: 0,
              background: "linear-gradient(to right, #ffffff, #a1a1aa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Aryan Shrivastava
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#d4d4d8",
              fontWeight: 500,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Full Stack Developer &amp; Software Engineer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#71717a",
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "900px",
            }}
          >
            Crafting scalable web applications, Web3 integrations, and intuitive frontend experiences.
          </p>
        </div>

        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          {["Next.js", "TypeScript", "React", "Python", "Web3", "Tailwind CSS"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 22px",
                  borderRadius: "9999px",
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  color: "#e4e4e7",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
