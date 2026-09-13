import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Deployed at https://polnisch-abitur-bayern.de (custom domain → BASE=/).
// Override with SITE / BASE env vars if needed (e.g. preview on github.io/<repo>/).
const site = process.env.SITE ?? "https://polnisch-abitur-bayern.de";
const base = process.env.BASE ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 4321, host: true },
});
