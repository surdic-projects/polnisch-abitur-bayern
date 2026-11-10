import type { Lang } from "~/i18n";

export type FaqItem = { q: string; a: string };
export type FaqSource = {
  n: number;
  url: string;
  publisher: Record<Lang, string>;
  title: Record<Lang, string>;
};

export const FAQ_AS_OF: Record<Lang, string> = {
  pl: "23 października 2026 r.",
  de: "23. Oktober 2026",
};

// Citation marker linking to the sources list on the FAQ page, e.g. cite(1, 2) → [1, 2]
const cite = (...ns: number[]) =>
  ` <sup>[${ns.map((n) => `<a href="#zrodlo-${n}">${n}</a>`).join(", ")}]</sup>`;

const pl: FaqItem[] = [
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
<p>Próg zgłoszeń <strong>12 uczestników</strong> i termin zgłoszeń do <strong>końca listopada 2026 r.</strong> wymagają osobnego potwierdzenia dla tej inicjatywy.</p>`,
  },
];

// 13 questions: the customer left out PL question 14 on purpose, as the earlier answers already cover it.
const de: FaqItem[] = [
  {
    q: "Welche Sprachkenntnisse sind für den Einstieg erforderlich?",
    a: `<p>Der Lehrplan ist im Dokument des Bayerischen Staatsministeriums für Unterricht und Kultus mit dem Titel <em>LehrplanPLUS</em> genau festgelegt. Der reguläre Bildungsweg umfasst die Jahrgangsstufen 11 bis 13. Der Unterricht beginnt in Jahrgangsstufe 11 ohne Vorkenntnisse. Die Kompetenzniveaus <strong>A2</strong>, <strong>A2+</strong> und <strong>B1</strong> werden am Ende der Jahrgangsstufen 11, 12 bzw. 13 erreicht.${cite(1, 2)}</p>
<p>Bei einem Einstieg erst in Jahrgangsstufe 12 müssen Polnischkenntnisse mindestens auf dem Niveau <strong>A2</strong> vorhanden sein.${cite(3)}</p>`,
  },
  {
    q: "Wie wird der Unterricht organisiert sein?",
    a: `<p>Der Kurs wird in Form eines <em>Sammelkurses</em> angeboten. Dabei handelt es sich um einen schulübergreifenden Unterricht, an dem Schülerinnen und Schüler verschiedener Schulen teilnehmen und dafür gemeinsam eine ausgewählte Schule besuchen (ein Gymnasium im Stadtgebiet von Nürnberg, Fürth oder ggf. Erlangen). Der Stundenumfang beträgt <strong>vier Unterrichtsstunden pro Woche in Jahrgangsstufe 11</strong> sowie <strong>drei Unterrichtsstunden pro Woche in den Jahrgangsstufen 12 und 13</strong>.${cite(4, 5)}</p>
<p>Der Wochentag, die Unterrichtszeiten und der Schulstandort werden vom Kultusministerium bestätigt, sobald genügend Schülerinnen und Schüler für den ersten Kursjahrgang zusammengekommen sind.</p>`,
  },
  {
    q: "Wie lange dauert der Unterricht?",
    a: `<p>Der vollständige Bildungsgang für die neu einsetzende <em>„spät beginnende Fremdsprache“</em>, also der Spracherwerb von Grund auf, umfasst <strong>drei Jahre</strong>: die Jahrgangsstufen 11, 12 und 13 (insgesamt sechs Semester).</p>
<p>Bei einem Einstieg in Jahrgangsstufe 12 dauert die Teilnahme <strong>vier Semester</strong> (Jahrgangsstufen 12 und 13).${cite(3)}</p>`,
  },
  {
    q: "Steht dieser Unterricht in Verbindung mit der Polnischen Samstagsschule in Nürnberg?",
    a: `<p><strong>Nein.</strong> Es handelt sich um zwei voneinander unabhängige Bildungsangebote.</p>
<p>Die Polnische Schule in Nürnberg unterliegt der Struktur von ORPEG. Sie untersteht damit dem polnischen Ministerium für Nationale Bildung und bietet ergänzenden Unterricht nach dem Lehrplan polnischer Schulen an. Der Unterricht im Fach <strong>Polnisch als Fremdsprache</strong> am bayerischen Gymnasium hingegen unterliegt den bayerischen Schulvorschriften.${cite(3, 6)}</p>
<p>Der Besuch der Polnischen Schule samstags trägt ausschließlich zur Weiterentwicklung der Sprachkenntnisse bei.</p>`,
  },
  {
    q: "Wer kann sich anmelden?",
    a: `<p>Das Angebot richtet sich an interessierte Schülerinnen und Schüler eines bayerischen Gymnasiums (G9). Polnisch kann in allen Ausbildungsrichtungen des Gymnasiums als <em>spät beginnende Fremdsprache</em> angeboten werden. Das Fach ist nicht auf Schülerinnen und Schüler polnischer Herkunft beschränkt.${cite(1, 3)}</p>
<p>Bei einem regulären Unterrichtsbeginn in Jahrgangsstufe 11 muss die Wahl des Fachs vor dem Übergang von Jahrgangsstufe 10 in Jahrgangsstufe 11 abgestimmt werden. Ein Einstieg erst in Jahrgangsstufe 12 setzt Polnischkenntnisse mindestens auf dem Niveau <strong>A2</strong> voraus (siehe Frage 1).</p>`,
  },
  {
    q: "Wer ist für das Schulfach Polnisch verantwortlich?",
    a: `<p>Die Bemühungen um die Einrichtung dieses Unterrichtsangebots in Nürnberg werden von einer Elterninitiative getragen.</p>
<p>Der reguläre Schulunterricht einschließlich der Leistungsbewertung und der Anerkennung des Fachs im Rahmen des Bildungswegs zum Abitur wird im Rahmen eines abgestimmten Angebots an dem vom Kultusministerium ausgewählten Gymnasium stattfinden.${cite(4)}</p>
<p>Für Fragen zum Gymnasium ist das <strong>Bayerische Staatsministerium für Unterricht und Kultus</strong> zuständig.</p>`,
  },
  {
    q: "Welche Vorteile bietet die Teilnahme am Unterricht?",
    a: `<p>Polnisch als Fremdsprache in der Form der <strong>„spät beginnenden Fremdsprache“</strong> kann zu einem vollwertigen Bestandteil des schulischen Bildungswegs zum Abitur werden.</p>
<p>Die Leistungen aus den Jahrgangsstufen 12 und 13 fließen in die Qualifikationsphase ein. Wird Polnisch als mündliches Abiturprüfungsfach gewählt, kann das Prüfungsergebnis die Abiturnote positiv beeinflussen. Die mündliche Abiturprüfung in Polnisch ist <strong>freiwillig</strong> und nicht verpflichtend.${cite(7, 8)}</p>`,
  },
  {
    q: "Wo wird der Unterricht stattfinden?",
    a: `<p>Das Angebot soll Schülerinnen und Schüler aus mehreren Schulen im Regierungsbezirk Mittelfranken zusammenführen.</p>
<p>Die Regelungen zur Zusammenarbeit sowie zur Anerkennung der erzielten Leistungen an den jeweiligen Stammschulen der Schülerinnen und Schüler werden gesondert abgestimmt und bestätigt.</p>
<p>Das Gymnasium, an dem der Unterricht stattfinden wird (in Nürnberg oder ggf. in Fürth oder Erlangen), wird vom Kultusministerium bestimmt.</p>`,
  },
  {
    q: "Wie alt muss man sein, um mit dem Unterricht zu beginnen?",
    a: `<p>Der reguläre Bildungsweg beginnt in Jahrgangsstufe 11, nach Abschluss der Jahrgangsstufe 10. Bei entsprechenden Polnischkenntnissen auf mindestens dem Niveau <strong>A2</strong> ist auch ein Einstieg in Jahrgangsstufe 12 möglich.${cite(3, 4)}</p>
<p>Entscheidend sind die jeweilige Jahrgangsstufe und die Erfüllung der sprachlichen Voraussetzungen, nicht das Lebensalter der Schülerinnen und Schüler.</p>`,
  },
  {
    q: "Was kostet der Unterricht?",
    a: `<p>Der Unterricht findet im Rahmen eines öffentlichen Gymnasiums statt und ist daher gemäß Art. 23 BaySchFG <strong>kostenlos</strong>.${cite(9)}</p>`,
  },
  {
    q: "In welcher Jahrgangsstufe muss man sein, um sich anmelden zu können?",
    a: `<p>Beim regulären Bildungsweg wird die Wahl des Fachs in Jahrgangsstufe 10 abgestimmt, der Unterricht beginnt dann in Jahrgangsstufe 11. Polnisch kann dabei an Stelle der bisher ersten oder zweiten Fremdsprache treten. In den Jahrgangsstufen 12 und 13 muss parallel mindestens eine der bisherigen Fremdsprachen weitergeführt werden.${cite(3, 4, 5)}</p>
<p>Beispiel: Polnisch könnte Latein oder Französisch ersetzen, während Englisch weitergeführt wird. Dies ist ein Beispiel für eine mögliche Unterrichtsorganisation nach Einführung des Angebots. Die Bezeichnungen „erste“ und „zweite“ Fremdsprache beziehen sich auf die Reihenfolge, in der die Sprachen begonnen wurden, nicht auf das jeweilige Sprachniveau.${cite(10, 11)}</p>
<p>Schülerinnen und Schüler, die sich bereits in Jahrgangsstufe 11 befinden, können einen Einstieg ab Jahrgangsstufe 12 im Rahmen der gesonderten Regelung in Betracht ziehen (siehe Frage 3). Daraus ergibt sich jedoch nicht automatisch das Recht, die bisherige Fremdsprache bereits in Jahrgangsstufe 11 vorzeitig abzuwählen.${cite(3, 4)}</p>`,
  },
  {
    q: "Welche Inhalte und Themen umfasst der Lehrplan?",
    a: `<p>Der Lehrplan ist im bayerischen <em>LehrplanPLUS</em> für Polnisch als <em>spät beginnende Fremdsprache</em> in den Jahrgangsstufen 11 bis 13 veröffentlicht.</p>
<p>Er umfasst Hör- und Leseverstehen, Sprechen, Schreiben, Sprachmittlung, Grammatik und Wortschatz sowie die Arbeit mit Texten und Medien.${cite(1, 2)}</p>
<p>Die Themenbereiche betreffen unter anderem den Alltag, Schule, Familie und Beruf, die Geografie und Geschichte Polens, Kultur, Literatur sowie aktuelle Ereignisse. Die konkrete Auswahl der Unterrichtsmaterialien erfolgt im Rahmen der Umsetzung dieses Lehrplans.${cite(1, 12)}</p>`,
  },
  {
    q: "Muss man Polnisch als Abiturprüfungsfach wählen?",
    a: `<p><strong>Nein.</strong> Schülerinnen und Schüler können Polnisch bis zum Ende der Jahrgangsstufe 13 belegen, ohne darin eine Abiturprüfung abzulegen. Bei einem Einstieg in Jahrgangsstufe 11 ist die Fortsetzung des Unterrichts bis zum Ende der Jahrgangsstufe 13 verpflichtend.${cite(3)}</p>
<p>Wer Polnisch als Abiturprüfungsfach wählen möchte, kann darin ausschließlich eine mündliche Prüfung (<em>Kolloquium</em> auf grundlegendem Anforderungsniveau – gA) ablegen. Polnisch kann in diesem Fall eines der beiden mündlichen Prüfungsfächer im fünfteiligen Abitur sein. Eine schriftliche Abiturprüfung in Polnisch sowie die Wahl von Polnisch als <em>Leistungsfach</em> sind nicht möglich.</p>
<p>Zusätzlich muss die Prüfungsfächerkombination entweder eine fortgeführte Fremdsprache aus den vorherigen Jahrgangsstufen oder ein naturwissenschaftliches Fach enthalten.${cite(11, 13)}</p>
<p>Beispiel für eine mögliche Prüfungsfächerkombination:<br /><em>Schriftliche Abiturprüfungen:</em> Deutsch, Mathematik und Biologie (Biologie als Leistungsfach)<br /><em>Mündliche Abiturprüfungen:</em> Geschichte und Polnisch (Polnisch als Kolloquium auf grundlegendem Anforderungsniveau – gA)</p>
<p>Ob eine solche Kombination im individuellen Fall zulässig ist, muss anhand der gesamten Fächerbelegung mit der Oberstufenkoordination der Schule abgestimmt werden.${cite(7, 13)}</p>`,
  },
];

export const FAQ: Record<Lang, FaqItem[]> = { pl, de };

const LEHRPLAN = { pl: "LehrplanPLUS", de: "LehrplanPLUS" };
const BAYERN_RECHT = { pl: "Bayern Recht", de: "Bayern.Recht" };
const KULTUS = { pl: "Bawarskie Ministerstwo Oświaty", de: "Bayerisches Staatsministerium für Unterricht und Kultus" };

export const FAQ_SOURCES: FaqSource[] = [
  {
    n: 1, publisher: LEHRPLAN,
    title: { pl: "Profil przedmiotu Polnisch w Gymnasium G9 oraz poziomy A2, A2+, B1", de: "Fachprofil Polnisch am Gymnasium G9 mit den Kompetenzniveaus A2, A2+ und B1" },
    url: "https://www.lehrplanplus.bayern.de/fachprofil/gymnasium/pln/auspraegung/polnisch/13",
  },
  {
    n: 2, publisher: LEHRPLAN,
    title: { pl: "Polnisch 11 spät beginnende Fremdsprache", de: "Polnisch 11 – spät beginnende Fremdsprache" },
    url: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/pln/spaet-fremdsprache",
  },
  {
    n: 3, publisher: BAYERN_RECHT,
    title: { pl: "GSO § 19 – organizacja nauki i warunki wyboru późno rozpoczynanego języka", de: "GSO § 19 – Unterrichtsorganisation und Voraussetzungen für die Wahl einer spät beginnenden Fremdsprache" },
    url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-19",
  },
  {
    n: 4, publisher: BAYERN_RECHT,
    title: { pl: "GSO Anlage 1, przypis 7 – początek w klasie 11 i cztery godziny tygodniowo", de: "GSO Anlage 1, Fußnote 7 – Beginn in Jahrgangsstufe 11 und vier Wochenstunden" },
    url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-ANL_1",
  },
  {
    // Labelled Anlage 5 by the customer; the gesetze-bayern.de URL says ANL_6 but lands on Anlage 5.
    n: 5, publisher: BAYERN_RECHT,
    title: { pl: "GSO Anlage 5 – plan zajęć w klasach 12 i 13", de: "GSO Anlage 5 – Stundentafel für die Jahrgangsstufen 12 und 13" },
    url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-ANL_6",
  },
  {
    n: 6, publisher: { pl: "Szkoła Polska w Norymberdze", de: "Polnische Schule in Nürnberg" },
    title: { pl: "Informacje o szkole, jej programie i strukturze ORPEG", de: "Informationen zur Schule, ihrem Unterrichtsprogramm und ihrer Zugehörigkeit zu ORPEG" },
    url: "https://norymberga.orpeg.gov.pl/o-szkole/",
  },
  {
    n: 7, publisher: KULTUS,
    title: { pl: "Einbringungsverpflichtung – zasady wliczania ocen", de: "Einbringungsverpflichtung – Regelungen zur Einbringung der Leistungen in die Abiturqualifikation" },
    url: "https://www.gymnasiale-oberstufe.bayern.de/qualifikationssystem/einbringungsverpflichtung",
  },
  {
    n: 8, publisher: BAYERN_RECHT,
    title: { pl: "GSO § 53 – punktacja końcowa, Blok I i Blok II", de: "GSO § 53 – Gesamtqualifikation, Block I und Block II" },
    url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-53",
  },
  {
    n: 9, publisher: BAYERN_RECHT,
    title: { pl: "BaySchFG art. 23 – bezpłatność nauczania w szkołach publicznych", de: "BaySchFG Art. 23 – Schulgeldfreiheit an öffentlichen Schulen" },
    url: "https://www.gesetze-bayern.de/Content/Document/BaySchFG-23",
  },
  {
    n: 10, publisher: { pl: "Hans-Sachs-Gymnasium", de: "Hans-Sachs-Gymnasium" },
    title: { pl: "Schulprofil – profil przyrodniczy i oferowane języki", de: "Schulprofil – naturwissenschaftliches Profil und angebotene Fremdsprachen" },
    url: "https://www.hans-sachs-gymnasium.de/unsere-schule/schulprofil/",
  },
  {
    n: 11, publisher: KULTUS,
    title: { pl: "Belegungsverpflichtung – typy języków i zasady ich wyboru", de: "Belegungsverpflichtung – Fremdsprachenarten und Regelungen zur Fächerwahl" },
    url: "https://www.gymnasiale-oberstufe.bayern.de/faecherwahl-und-belegung/belegungsverpflichtung",
  },
  {
    n: 12, publisher: LEHRPLAN,
    title: { pl: "Polnisch 13 spät beginnende Fremdsprache", de: "Polnisch 13 – spät beginnende Fremdsprache" },
    url: "https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/13/pln",
  },
  {
    n: 13, publisher: BAYERN_RECHT,
    title: { pl: "GSO § 48 – wybór przedmiotów i forma egzaminów Abitur", de: "GSO § 48 – Fächerwahl und Prüfungsformen im Abitur" },
    url: "https://www.gesetze-bayern.de/Content/Document/BayGSO-48",
  },
];
