# polnisch-abitur-bayern

Strona informacyjna projektu **„Kurs języka polskiego do niemieckiej matury
(Abitur) dla uczniów z regionu Nürnberg–Fürth–Erlangen”**.

Zbudowana w [Astro](https://astro.build/) i [Tailwind CSS](https://tailwindcss.com/),
generuje w pełni statyczny HTML — nadaje się do hostowania na GitHub Pages,
Netlify, Cloudflare Pages, Vercel lub dowolnym serwerze plików statycznych.

Autorka treści: **Anna Dębska-Kroener**. Kod stworzony na podstawie oryginalnego
bloga [polnisch-abitur-bayern.blogspot.com](https://polnisch-abitur-bayern.blogspot.com/).

## Wymagania

- Node.js 20 lub nowszy
- npm 10 lub nowszy

## Praca lokalna

```bash
npm install
npm run dev      # dev server na http://localhost:4321
npm run build    # zbudowany site w ./dist
npm run preview  # podgląd zbudowanej wersji
```

## Struktura

```
src/
  layouts/BaseLayout.astro   # wspólny layout HTML
  components/                # Header, Footer, FaqItem
  pages/                     # jedna strona na plik .astro
    index.astro              # /
    kurs.astro               # /kurs
    konsulat.astro           # /konsulat
    faq.astro                # /faq
    ulotka.astro             # /ulotka
    rejestracja.astro        # /rejestracja
    kontakt.astro            # /kontakt
  data/faq.ts                # treść pytań i odpowiedzi
  lib/url.ts                 # helper `withBase()` dla ścieżek
  styles/global.css          # Tailwind + własne warstwy
public/
  ulotka.png                 # ulotka projektu (do pobrania i wydruku)
```

## Deploy na GitHub Pages

Repozytorium zawiera gotowy workflow w
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), który:

1. Instaluje zależności (`npm ci`)
2. Odczytuje właściwy `SITE` i `BASE` z akcji `actions/configure-pages@v5`
   (poprawnie dla project pages, user pages i custom domain)
3. Buduje site (`npm run build`)
4. Wgrywa `./dist` jako artefakt Pages i publikuje

### Jednorazowa konfiguracja repozytorium

1. Utwórz repozytorium na GitHubie o nazwie **`polnisch-abitur-bayern`**
   (lub innej — konfiguracja jest w pełni automatyczna).
2. Wypchnij kod na gałąź `main`:

   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin git@github.com:<uzytkownik>/polnisch-abitur-bayern.git
   git push -u origin main
   ```

3. W repozytorium wejdź w **Settings → Pages** i ustaw
   **Source: GitHub Actions**.
4. Workflow uruchomi się przy najbliższym pushu na `main` (lub można
   go odpalić ręcznie z zakładki Actions).

Adres: `https://<uzytkownik>.github.io/polnisch-abitur-bayern/`.

### Custom domain (opcjonalnie)

Jeżeli chcesz podpiąć własną domenę (np. `polnisch-abitur-bayern.de`):

1. Dodaj plik `public/CNAME` z jednym wierszem: `polnisch-abitur-bayern.de`
2. Skonfiguruj DNS zgodnie z
   [instrukcją GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
3. Włącz *Enforce HTTPS* w Settings → Pages.

Workflow automatycznie ustawi `BASE=/`, więc żadne ręczne zmiany w kodzie
nie są potrzebne.

## Licencja

Kod: MIT (możesz zmienić na dowolną). Treść merytoryczna i grafiki
(np. `public/ulotka.png`) — prawa autorskie należą do autorów projektu.
