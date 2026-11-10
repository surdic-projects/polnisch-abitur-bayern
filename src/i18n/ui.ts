import type { Lang, PageKey } from "~/i18n";

// Shared interface strings (header, footer, page defaults). Page copy lives
// next to its markup in src/views/*.astro.

type NavKey = Exclude<PageKey, "home" | "impressum">;
export const NAV: NavKey[] = ["kurs", "faq", "ulotka", "rejestracja", "kontakt"];

const pl = {
  meta: {
    title: "Język polski do niemieckiej matury (Abitur) — Bawaria",
    titleSuffix: "Język polski do Abitur — Bawaria",
    description:
      "Kurs języka polskiego jako spät beginnende Fremdsprache dla uczniów z regionu Nürnberg–Fürth–Erlangen. Projekt informacyjny grupy rodziców z Norymbergi.",
  },
  skipLink: "Przejdź do treści",
  brand: "Język polski do Abitur",
  region: "Bawaria · Nürnberg–Fürth–Erlangen",
  homeLabel: "Strona główna",
  mainNav: "Menu główne",
  menu: "Menu",
  openMenu: "Otwórz menu",
  langSwitch: "Wybór języka",
  nav: {
    kurs: "Kurs",
    faq: "Pytania",
    ulotka: "Ulotka",
    rejestracja: "Rejestracja",
    kontakt: "Kontakt",
  } as Record<NavKey, string>,
  footer: {
    about:
      "Strona informacyjna dotycząca kursu języka polskiego jako <em>spät beginnende Fremdsprache</em> w bawarskim systemie oświaty, dla uczniów z regionu Nürnberg–Fürth–Erlangen.",
    navTitle: "Nawigacja",
    nav: {
      kurs: "Kurs",
      faq: "Pytania i odpowiedzi",
      ulotka: "Ulotka kursu",
      rejestracja: "Rejestracja / Zgłoszenie",
      kontakt: "Kontakt",
    } as Record<NavKey, string>,
    contactTitle: "Kontakt",
    disclaimer: "nie jest to strona oficjalna urzędu ani ministerstwa.",
    impressum: "Impressum",
  },
};

const de: typeof pl = {
  meta: {
    title: "Polnisch fürs Abitur — Bayern",
    titleSuffix: "Polnisch fürs Abitur — Bayern",
    description:
      "Polnisch als spät beginnende Fremdsprache für Schülerinnen und Schüler aus dem Raum Nürnberg–Fürth–Erlangen. Informationsprojekt einer Elterngruppe aus Nürnberg.",
  },
  skipLink: "Zum Inhalt springen",
  brand: "Polnisch fürs Abitur",
  region: "Bayern · Nürnberg–Fürth–Erlangen",
  homeLabel: "Startseite",
  mainNav: "Hauptmenü",
  menu: "Menü",
  openMenu: "Menü öffnen",
  langSwitch: "Sprachauswahl",
  nav: {
    kurs: "Kurs",
    faq: "Fragen",
    ulotka: "Flyer",
    rejestracja: "Anmeldung",
    kontakt: "Kontakt",
  },
  footer: {
    about:
      "Informationsseite zum Polnischkurs als <em>spät beginnende Fremdsprache</em> im bayerischen Schulsystem für Schülerinnen und Schüler aus dem Raum Nürnberg–Fürth–Erlangen.",
    navTitle: "Navigation",
    nav: {
      kurs: "Kurs",
      faq: "Fragen und Antworten",
      ulotka: "Flyer zum Kurs",
      rejestracja: "Anmeldung",
      kontakt: "Kontakt",
    },
    contactTitle: "Kontakt",
    disclaimer: "keine offizielle Website einer Behörde oder eines Ministeriums.",
    impressum: "Impressum",
  },
};

export const UI: Record<Lang, typeof pl> = { pl, de };
