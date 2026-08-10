import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// GitHub Pages deploy:
//   Project page (default) → served at https://<user>.github.io/<repo>/
//     Set SITE=https://<user>.github.io and BASE=/<repo>/
//   User/org page          → served at https://<user>.github.io/
//     Set SITE=https://<user>.github.io and BASE=/
//   Custom domain          → set SITE=https://your-domain.tld and BASE=/
// The GitHub Actions workflow (.github/workflows/deploy.yml) sets these
// automatically for a project-page deployment.
const site = process.env.SITE ?? "https://example.github.io";
const base = process.env.BASE ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 4321, host: true },
});
