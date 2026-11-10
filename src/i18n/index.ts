import { withBase } from "~/lib/url";

export const LANGS = ["pl", "de"] as const;
export type Lang = (typeof LANGS)[number];

// "/" redirects here; also the hreflang x-default.
export const DEFAULT_LANG: Lang = "pl";

export const LANG_LABELS: Record<Lang, { short: string; name: string }> = {
  pl: { short: "PL", name: "Polski" },
  de: { short: "DE", name: "Deutsch" },
};

// URL slug of every page per language ("" = that language's home page).
// Single source of truth for routing, navigation and the language switch.
export const PAGES = {
  home:        { pl: "",            de: "" },
  kurs:        { pl: "kurs",        de: "kurs" },
  faq:         { pl: "faq",         de: "faq" },
  ulotka:      { pl: "ulotka",      de: "flyer" },
  rejestracja: { pl: "rejestracja", de: "anmeldung" },
  kontakt:     { pl: "kontakt",     de: "kontakt" },
  impressum:   { pl: "impressum",   de: "impressum" },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof PAGES;
export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

/** Site-relative URL of a page in the given language, base path included. */
export function path(lang: Lang, page: PageKey): string {
  return withBase(`/${lang}/${PAGES[page][lang]}`);
}
