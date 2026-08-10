/**
 * Resolve an absolute-looking site path (e.g. "/kurs" or "/ulotka.png")
 * against Astro's configured base path so the same href works whether
 * the site is deployed at "/" (custom domain / user page) or at
 * "/<repo>/" (GitHub project page).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  if (!path.startsWith("/")) return path;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return trimmedBase + path;
}
