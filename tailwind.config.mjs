import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111418",
          soft: "#3a3f47",
          mute: "#6b7280",
          faint: "#9ca3af",
        },
        paper: {
          DEFAULT: "#fbfaf7",
          soft: "#f3f0ea",
          card: "#ffffff",
        },
        rule: "#e5e2db",
        crimson: {
          DEFAULT: "#8a1c2b",
          hover: "#701624",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
        serif: ['"Source Serif 4"', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        prose: "42rem",
        content: "68rem",
      },
      typography: () => ({
        DEFAULT: { css: { color: "#3a3f47" } },
      }),
    },
  },
  plugins: [],
};
