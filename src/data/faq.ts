export type FaqItem = { q: string; a: string };
export type FaqSource = { n: number; publisher: string; title: string; url: string };

export const FAQ_AS_OF = "23 października 2026 r.";

// Citation marker linking to the sources list on the FAQ page, e.g. cite(1, 2) → [1, 2]
const cite = (...ns: number[]) =>
  ` <sup>[${ns.map((n) => `<a href="#zrodlo-${n}">${n}</a>`).join(", ")}]</sup>`;

export const FAQ: FaqItem[] = [
  {
    q: "Jaki poziom językowy jest wymagany do rozpoczęcia nauki?",
    a: `<p>Program nauki jest ściśle określony w dokumencie Kultusministerium pt. <em>LehrplanPLUS</em>. Standardowa ścieżka przewiduje naukę od podstaw od klasy 11. LehrplanPLUS określa poziomy osiągane na koniec kolejnych klas: <strong>A2</strong> po klasie 11, <strong>A2+</strong> po klasie 12 i <strong>B1</strong> po klasie 13.${cite(1, 2)}</p>
<p>Przy dołączeniu dopiero w klasie 12 należy znać język polski przynajmniej na poziomie <strong>A2</strong>.${cite(3)}</p>`,
  },
  {
    q: "Jak będą wyglądały zajęcia?",
    a: `<p>Kurs ma formę tzw. <em>Sammelkurs</em>, czyli zajęć międzyszkolnych, gdzie uczniowie z wielu szkół przyjeżdżają do jednej wybranej placówki (gimnazjum na terenie Norymbergi lub Fürth lub ewentualnie Erlangen). Wymiar zajęć: <strong>4 godziny lekcyjne tygodniowo w klasie 11</strong> oraz <strong>3 godziny tygodniowo w klasach 12 i 13</strong>. Jest to przedmiot szkolny z ocenami i sprawdzianami.${cite(4, 5)}</p>
<p>Dzień tygodnia, godziny i placówka, w której zajęcia będą się odbywać, zostaną potwierdzone przez Kultusministerium, gdy uda się zgromadzić wymaganą liczbę uczniów na pierwszy rocznik kursu.</p>`,
  },
  {
    q: "Jak długo trwa nauka?",
    a: `<p>Pełna ścieżka <em>„neu einsetzende spät beginnende Fremdsprache”</em>, czyli nauka od zera, obejmuje <strong>trzy lata</strong>: klasa 11, 12 i 13 (6 semestrów).</p>
<p>W przypadku dołączenia do kursu w klasie 12 uczeń uczęszcza na zajęcia przez <strong>4 semestry</strong> (12. i 13. klasa).${cite(3)}</p>`,
  },
  {
    q: "Czy te zajęcia są związane z sobotnią Szkołą Polską w Norymberdze?",
    a: `<p><strong>Nie.</strong> To dwie odrębne formy nauczania. Szkoła Polska w Norymberdze działa w strukturze ORPEG, podlega polskiemu Ministerstwu Edukacji Narodowej i prowadzi uzupełniający program nauczania wg programu polskich szkół. Natomiast <strong>język polski jako obcy</strong> w bawarskim Gymnasium podlega bawarskim przepisom szkolnym.${cite(3, 6)}</p>
<p>Nauka w Szkole Polskiej może pomóc w rozwijaniu umiejętności, ale samo jej ukończenie nie oznacza automatycznego zaliczenia przedmiotu ani dopuszczenia do niemieckiego Abitur.${cite(3)}</p>`,
  },
  {
    q: "Kto może się zgłosić?",
    a: `<p>Zainteresowani uczniowie bawarskiego Gymnasium G9. Polski może być oferowany jako <em>spät beginnende Fremdsprache</em> we wszystkich profilach Gymnasium; nie jest to przedmiot zastrzeżony dla osób polskiego pochodzenia.${cite(1, 3)}</p>
<p>Dla standardowego rozpoczęcia nauki w klasie 11 wybór należy uzgodnić przed przejściem z klasy 10 do 11. Wejście dopiero w klasie 12 wymaga znajomości języka polskiego na poziomie przynajmniej <strong>A2</strong> (patrz pyt. 1).</p>`,
  },
  {
    q: "Kto jest organizatorem przedmiotu języka polskiego?",
    a: `<p>Starania o uruchomienie oferty w Norymberdze prowadzi inicjatywa rodzicielska. Formalne zajęcia szkolne, ich ocenianie i uznawanie w ścieżce do Abitur będą odbywać się w ramach uzgodnionej oferty Gymnasium wybranego przez Kultusministerium.${cite(4)}</p>
<p>W sprawach Gymnasium właściwym ministerstwem jest <strong>Bayerisches Staatsministerium für Unterricht und Kultus</strong>.</p>`,
  },
  {
    q: "Co daje udział w zajęciach?",
    a: `<p>Język polski jako obcy w wersji <strong>„spät beginnende Fremdsprache”</strong> może stać się pełnoprawnym elementem szkolnej ścieżki do Abitur. Wyniki z klas 12–13 uwzględnia się w części kwalifikacyjnej. Jeśli polski zostanie wybrany jako ustny przedmiot egzaminu maturalnego, wynik egzaminu korzystnie wpłynie na końcową ocenę Abitur. Egzamin ustny maturalny jest <strong>opcjonalny</strong>, nie obowiązkowy.${cite(7, 8)}</p>`,
  },
  {
    q: "Gdzie będą odbywać się zajęcia?",
    a: `<p>Oferta ma łączyć uczniów z kilku szkół w rejonie Mittelfranken. Zasady współpracy i uznawania wyników w szkołach macierzystych uczniów będą osobno uzgadniane i potwierdzane. Szkoła prowadząca zajęcia w Norymberdze (lub ewentualnie Fürth lub Erlangen) zostanie wskazana przez Kultusministerium.</p>`,
  },
  {
    q: "Ile trzeba mieć lat, żeby rozpocząć?",
    a: `<p>Standardowa ścieżka zaczyna się w klasie 11, po ukończeniu klasy 10. Przy znajomości języka na poziomie minimum <strong>A2</strong> jest możliwe dołączenie do kursu w klasie 12.${cite(3, 4)}</p>
<p>Decydują etap nauki i spełnienie warunków znajomości języka, a nie metrykalny wiek ucznia.</p>`,
  },
  {
    q: "Ile kosztują zajęcia?",
    a: `<p>Zajęcia będą odbywać się w ramach publicznego gimnazjum, zatem będą <strong>bezpłatne</strong>, zgodnie z art. 23 BaySchFG.${cite(9)}</p>`,
  },
  {
    q: "W której klasie trzeba być, żeby się zapisać?",
    a: `<p>W standardowej ścieżce wybór uzgadnia się w klasie 10, a naukę rozpoczyna w klasie 11. Szkoła może wówczas zastąpić polskim pierwszy albo drugi dotychczasowy język obcy. W klasach 12–13 trzeba równolegle uczyć się co najmniej jednego języka kontynuowanego z wcześniejszych klas.${cite(3, 4, 5)}</p>
<p>Przykład: polski mógłby zastąpić łacinę albo francuski, a angielski byłby kontynuowany. To przykład możliwej organizacji po wprowadzeniu oferty. Określenia „pierwszy” i „drugi” oznaczają kolejność rozpoczynania nauki języków, nie poziom zaawansowania.${cite(10, 11)}</p>
<p>Uczeń będący już w klasie 11 może rozważyć wejście od klasy 12 w odrębnym trybie opisanym w odpowiedzi 3. Nie daje to jednak automatycznie prawa do wcześniejszej rezygnacji z nauki dotychczasowego języka w klasie 11.${cite(3, 4)}</p>`,
  },
  {
    q: "Jaki jest zakres materiału i program nauczania?",
    a: `<p>Program jest opublikowany w bawarskim <em>LehrplanPLUS</em> dla polskiego jako <em>spät beginnende Fremdsprache</em> w klasach 11–13. Obejmuje rozumienie ze słuchu i czytanie, mówienie, pisanie, pośredniczenie między językami, gramatykę i słownictwo oraz pracę z tekstami i mediami.${cite(1, 2)}</p>
<p>Tematy dotyczą między innymi życia codziennego, szkoły, rodziny i pracy, geografii i historii Polski, kultury, literatury oraz aktualnych wydarzeń. Szczegółowy dobór materiałów należy do realizacji tego programu.${cite(1, 12)}</p>`,
  },
  {
    q: "Czy egzamin maturalny z polskiego jest obowiązkowy?",
    a: `<p><strong>Nie.</strong> Można uczyć się polskiego bez wybierania go jako przedmiotu egzaminu Abitur. Obowiązek kontynuowania szkolnych zajęć do końca klasy 13 pozostaje jednak wiążący w ścieżce rozpoczętej w klasie 11.${cite(3)}</p>
<p>Jeżeli uczeń wybierze polski na Abitur, może zdawać go wyłącznie ustnie, jako <em>Kolloquium</em> na poziomie podstawowym gA, czyli jako jeden z dwóch ustnych przedmiotów w pięcioprzedmiotowym Abitur. Polski nie może być w tym trybie przedmiotem pisemnym ani <em>Leistungsfach</em>. W zestawie egzaminów musi być także język obcy kontynuowany z wcześniejszych klas albo przedmiot przyrodniczy.${cite(11, 13)}</p>
<p>Przykładowy zgodny zestaw: <em>pisemnie</em> niemiecki, matematyka i biologia jako Leistungsfach; <em>ustnie</em> historia i polski. Ostateczny zestaw wymaga sprawdzenia całego planu przez koordynatora Oberstufe.${cite(7, 13)}</p>`,
  },
  {
    q: "Czy zajęcia w Norymberdze już się odbywają?",
    a: `<p>Inicjatywa rodzicielska zabiega o uruchomienie oferty. W przedstawionym planie rozważany jest rok szkolny <strong>2027/2028</strong>, ale termin, szkoła prowadząca i warunki uruchomienia wymagają potwierdzenia.</p>
<p>Jeśli standardowa ścieżka zaczęłaby się w klasie 11 we wrześniu 2027 r., prowadziłaby do Abitur w 2030 r. Dwuletnia ścieżka od klasy 12 we wrześniu 2027 r. prowadziłaby do Abitur w 2029 r., ale tylko po spełnieniu odrębnych warunków przyjęcia.</p>
<p>Próg zgłoszeń <strong>15 uczestników</strong> i termin zgłoszeń do <strong>końca listopada 2026 r.</strong> wymagają osobnego potwierdzenia dla tej inicjatywy.</p>`,
  },
];

export const FAQ_SOURCES: FaqSource[] = [
  { n: 1,  publisher: "LehrplanPLUS",                 title: "Profil przedmiotu Polnisch w Gymnasium G9 oraz poziomy A2, A2+, B1",   url: "https://www.lehrplanplus.bayern.de/fachprofil/gymnasium/pln/auspraegung/polnisch/13" },
  { n: 2,  publisher: "LehrplanPLUS",                 title: "Polnisch 11 spät beginnende Fremdsprache",                             url: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/pln/spaet-fremdsprache" },
  { n: 3,  publisher: "Bayern Recht",                 title: "GSO § 19 – organizacja nauki i warunki wyboru późno rozpoczynanego języka", url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-19" },
  { n: 4,  publisher: "Bayern Recht",                 title: "GSO Anlage 1, przypis 7 – początek w klasie 11 i cztery godziny tygodniowo", url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-ANL_1" },
  { n: 5,  publisher: "Bayern Recht",                 title: "GSO Anlage 5 – plan zajęć w klasach 12 i 13",                          url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-ANL_6" },
  { n: 6,  publisher: "Szkoła Polska w Norymberdze",  title: "Informacje o szkole, jej programie i strukturze ORPEG",                 url: "https://norymberga.orpeg.gov.pl/o-szkole/" },
  { n: 7,  publisher: "Bawarskie Ministerstwo Oświaty", title: "Einbringungsverpflichtung – zasady wliczania ocen",                   url: "https://www.gymnasiale-oberstufe.bayern.de/qualifikationssystem/einbringungsverpflichtung" },
  { n: 8,  publisher: "Bayern Recht",                 title: "GSO § 53 – punktacja końcowa, Blok I i Blok II",                       url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-53" },
  { n: 9,  publisher: "Bayern Recht",                 title: "BaySchFG art. 23 – bezpłatność nauczania w szkołach publicznych",      url: "https://www.gesetze-bayern.de/Content/Document/BaySchFG-23" },
  { n: 10, publisher: "Hans-Sachs-Gymnasium",         title: "Schulprofil – profil przyrodniczy i oferowane języki",                 url: "https://www.hans-sachs-gymnasium.de/unsere-schule/schulprofil/" },
  { n: 11, publisher: "Bawarskie Ministerstwo Oświaty", title: "Belegungsverpflichtung – typy języków i zasady ich wyboru",           url: "https://www.gymnasiale-oberstufe.bayern.de/faecherwahl-und-belegung/belegungsverpflichtung" },
  { n: 12, publisher: "LehrplanPLUS",                 title: "Polnisch 13 spät beginnende Fremdsprache",                             url: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/13/pln" },
  { n: 13, publisher: "Bayern Recht",                 title: "GSO § 48 – wybór przedmiotów i forma egzaminów Abitur",                url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-48" },
];
