import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aryan Shrivastava | Full Stack Developer",
    short_name: "Aryan",
    description: "Portfolio of Aryan Shrivastava — Full Stack Developer building high-performance web applications and Web3 solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#141414",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
