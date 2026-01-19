# Laborationsplanering (Vecka 1-8)

Här är ett utkast på laborationer tillhörande kursplanen, inspirerat av strukturen i vecka 4 (uppdelat på a, b, c).

_Tone & Style:_ Instruerande, utforskande, med "Dölj/Visa"-lösningar och reflektionsfrågor.

---

## Vecka 1: Moduler & Versionshantering

_Fokus: Komma igång med modern JS-struktur och versionshantering lokalt._

### Lab 1-a: "Hello Modules"

- **Syfte:** Förstå `import` och `export` samt browser-stöd (`type="module"`).
- **Övningar:**
  1.  Skapa `main.js` och `utils.js`.
  2.  Skriv matematiska funktioner i `utils.js`. Exportera en som `default` och andra som namngivna (`export const ...`).
  3.  Importera och använd alla funktionerna i `main.js`.
  4.  Skapa en till fil `constants.js` och importera variabler från den.
- **Utmaning:** Använd "alias" vid import (`import { a as b }`) eller importera allt som ett namespace (`import * as Math`).

### Lab 1-b: "Git Basics"

- **Syfte:** versionshantering på egen hand.
- **Övningar:**
  1.  Initiera ett repo (`git init`).
  2.  Gör ändringar i dina filer från Lab 1-a.
  3.  `git add` och `git commit`. Titta på historiken (`git log`).
  4.  Skapa en `.gitignore` för att ignorera systemfiler.
- **Utmaning:** Använd `git diff` för att se vad du ändrat innan du committar.

### Lab 1-c: "Time Travel & Branching"

- **Syfte:** Hantera misstag och experimentera säkert.
- **Övningar:**
  1.  Gör en ändring som "pajar" koden. Återställ filen med `git restore` (eller `checkout`).
  2.  Skapa en ny branch `experiment`. Gör vågade ändringar där och committa.
  3.  Byt tillbaka till `main` och se att ändringarna är borta.
  4.  (Simulerat misstag) Gör en commit på main som du ångrar. Använd `git reset` för att backa bandet.
- **Utmaning:** Merga din `experiment`-branch till `main`.

---

## Vecka 2: Objekt, JSON & Lagring

_Fokus: Datastrukturer och persistering._

### Lab 2-a: grundläggande js-objekt

- **Syfte:** Objekt-literaler och egenskaper.
- **Övningar:**
  1.  Skapa objekt-literaler för att representera verkliga ting (t.ex. `person` med namn, ålder, adress).
  2.  Gör egenskapen `adress` till ett nästlat objekt (`{ gata, stad }`).
  3.  Logga ut specifika egenskaper med punkt-notation (`person.namn`).
  4.  Lägg till en ny egenskap dynamiskt efter att objektet skapats (`person.email = ...`).
- **Utmaning:** Loopa igenom objektets nycklar med `for...in` eller `Object.keys()`.

### Lab 2-b: att köra funktioner på ett objekt

- **Syfte:** Förstå metoder och kontexten för `this`.
- **Övningar:**
  1.  Utgå från objektet i 2-a. Lägg till en metod `introduce()` som loggar en hälsning med namnet (`this.namn`).
  2.  Skapa ett räknar-objekt (`counter`) med egenskapen `value` och metoderna `increment()` och `decrement()`.
  3.  Experiment: Spara metoden i en lös variabel (`const myFunc = counter.increment`) och kör den. Vad händer med `this`?
- **Utmaning:** Använd metoden som en event-lyssnare på en knapp och se hur `this` förändras (och hur man löser det med `bind` eller arrow functions).

### Lab 2-c: localStorage

- **Syfte:** Grunderna i localStorage (nyckel-värde).
- **Övningar:**
  1.  Skapa ett textfält där användaren kan skriva sitt namn.
  2.  Lyssna på `input` (eller en spara-knapp) och spara värdet direkt i `localStorage`.
  3.  När sidan laddas om: Läs upp värdet och fyll i fältet automatiskt.
- **Utmaning:** Lägg till en knapp "Glöm mig" som rensar storage.

### Lab 2-d: JSON

- **Syfte:** Spara komplex data (objekt) som text.
- **Övningar:**
  1.  Försök spara ett objekt direkt till localStorage och se vad som händer (`[object Object]`).
  2.  Använd `JSON.stringify(obj)` för att göra om objektet till en sträng innan du sparar.
  3.  Hämta strängen och använd `JSON.parse(str)` för att få tillbaka ett riktigt objekt.
- **Utmaning:** Bygg en enkel "Todo"-lista (array av objekt) som sparas vid varje ändring.

---

## Vecka 3: Asynkronitet & Datahantering

_Fokus: Hämta data utifrån._

### Lab 3-a: fetch

- **Syfte:** `fetch` och `async/await` mot egna filer.
- **Övningar:**
  1.  Skapa en textfil `data.txt` och en JSON-fil `data.json` lokalt i mappen.
  2.  Använd `fetch` för att läsa in textfilen och visa innehållet i konsolen.
  3.  Läs in JSON-filen, parsa den och skriv ut en egenskap.
  4.  Använd `async/await` istället för `.then()`.
- **Utmaning:** Hämta båda filerna parallellt med `Promise.all` (bara om du känner dig manad, annars `await` efter varandra).

### Lab 3-b: strukturera data

- **Syfte:** Strukturera information (mindre kod, mer tanke).
- **Övningar:**
  1.  Designa en JSON-struktur för en restaurang-meny (Kategorier, rätter, priser, allergi-info).
  2.  Skriv JSON-filen manuellt. Validera att den är korrekt (t.ex. via en linter eller online-verktyg).
  3.  Skriv ett litet script som bara läser in och loggar "Antal rätter: X".
- **Utmaning:** Hantera olika datatyper (booleans för vegetariskt, arrayer för ingredienser).

### Lab 3-c: "Image Loader"

- **Syfte:** Asynkron laddning utan `fetch` (Events).
- **Övningar:**
  1.  Skapa en instans av `new Image()`.
  2.  Lyssna på `load` (framgång) och `error` (misslyckande).
  3.  Sätt `src` till en bildfil.
  4.  När bilden har laddat: Lägg till den i DOM:en.
- **Utmaning:** Gör en funktion `preloadImages(urls)` som laddar en array av bilder innan de visas.

---

## Vecka 4: Intro till OOP

_Fokus: Klasser för struktur och inkapsling (ej arv)._

### Lab 4-a: Klasser

- **Syfte:** Klass-syntax, metoder och Getters/Setters.
- **Övningar:**
  1.  Skapa klassen `Rectangle` med `width` och `height` (publika egenskaper).
  2.  Lägg till en vanlig metod `resize(w, h)`.
  3.  Lägg till en **getter** `area` som räknar ut ytan dynamiskt (`return this.width * ...`).
  4.  Jämför i koden: `rect.area` (getter) vs `rect.width` (property) vs `rect.resize(...)` (metod).
- **Utmaning:** Lägg till en **setter** för `area` som listaren ut vad sidan ska vara (t.ex. kvadratrot) och uppdaterar width/height.

### Lab 4-b: inkapsling

- **Syfte:** Skydda data med privata fält (`#`) och validering.
- **Övningar:**
  1.  Skapa klassen `Account` med det privata fältet `#balance`.
  2.  Skapa en offentlig metod `deposit(amount)`.
  3.  Försök komma åt `#balance` utifrån (ska krascha).
  4.  Använd en setter för att validera uttag (kasta fel om saldot blir negativt).
- **Utmaning:** Skapa en "Transaction Log" (privat array) som sparar alla insättningar/uttag.

### Lab 4-c: Bildspel

- **Syfte:** Praktisk användning av klasser i UI.

---

## Vecka 5: DOM Scripting & Responsivitet

_Fokus: Dynamisk länkning mellan logik och vy._

### Lab 5-a: "Template Element"

- **Syfte:** Skapa DOM snyggare än `createElement` överallt.
- **Övningar:**
  1.  Skapa en `<template>` i HTML för ett "contact card".
  2.  Klona mallen i JS (`content.cloneNode(true)`).
  3.  Fyll i data och appenda till DOM.
- **Utmaning:** Skriv en funktion `renderTemplate(data)` som gör detta generiskt.

### Lab 5-b: "Event Delegation Menu"

- **Syfte:** Hantera många element effektivt.
- **Övningar:**
  1.  Skapa en stor nav-meny lista.
  2.  Sätt **en** klicklyssnare på `<ul>` (parent).
  3.  Identifiera vilket `<li>` som klickades med `e.target`.
- **Utmaning:** Hantera klick på ikoner inuti li-elementet (använd `.closest('li')`).

### Lab 5-c: "Responsive JS"

- **Syfte:** Ändra beteende/utseende baserat på data.
- **Övningar:**
  1.  Bygg en grid med items.
  2.  Lägg till en slider (input range) som styr hur många kolumner griden har (via CSS variabler eller inline style).
  3.  Hantera "overflow" - om texten i korten är för lång, fäll ihop den och visa en "Läs mer"-knapp.
- **Utmaning:** Lyssna på `resize`-event och dölj sidomenyn automatiskt på små skärmar.

---

## Vecka 6: API & Webbtjänster

_Fokus: "Riktig" integration._

### Lab 6-a: "Query Parameter Builder"

- **Syfte:** URL-manipulation och sökning.
- **Övningar:**
  1.  Sök-interface mot ett API (t.ex. TVMaze).
  2.  När användaren skriver, bygg URL:en `?q=...`.
  3.  Rendera resultatet.
- **Utmaning:** Implementera "Debounce" (vänta tills användaren slutat skriva innan sökning).

### Lab 6-b: "The Header Inspector"

- **Syfte:** Förstå HTTP-lagret.
- **Övningar:**
  1.  Hämta data från ett API som kräver/tillåter headers (t.ex. `Accept: application/json`).
  2.  Titta på `response.status` (200 vs 404).
  3.  Skapa en enkel Auth-simulering (skicka med en token i header).
- **Utmaning:** Läsa ut headers från svaret (`response.headers.get(...)`).

### Lab 6-c: "Map Integration" (eller annat externt lib)

- **Syfte:** Tredjeparts-APIer och bibliotek.
- **Övningar:**
  1.  Använd Leaflet (open source kartor) eller Google Maps.
  2.  Hämta koordinater från ett JSON-API.
  3.  Rita ut markörer på kartan.
- **Utmaning:** Klicka på en markör för att visa mer info i en popup.

---

## Vecka 7: Formulär

_Fokus: Interaktion och validering._

### Lab 7-a: "Konferens-anmälan"

- **Syfte:** HTML5 validering och semantik.
- **Övningar:**
  1.  Stort formulär: Namn, Email, T-shirt size (select), matpreferenser (checkboxar).
  2.  Använd `required`, `pattern`, `min`.
  3.  Styla `:invalid` css.
- **Utmaning:** Custom felmeddelande (`setCustomValidity`) om man väljer "Annat" men inte fyller i vad.

### Lab 7-b: "Live Validation"

- **Syfte:** JS-feedback i realtid.
- **Övningar:**
  1.  Lösenordsfält.
  2.  Medan man skriver: Visa en checklista (Minst 8 tecken, en siffra, etc).
  3.  Bocka av kraven i realtid.
- **Utmaning:** "Show password" toggle-öga.

### Lab 7-c: "Form Submission"

- **Syfte:** Skicka data (POST).
- **Övningar:**
  1.  Lyssna på `submit`.
  2.  `e.preventDefault()`!
  3.  Samla data med `new FormData(form)`.
  4.  Skicka med `fetch(url, { method: 'POST', body: ... })`.
- **Utmaning:** Hantera server-fel (t.ex. "Email upptagen") och visa i formuläret.

---

## Vecka 8: Optimering & SEO

_Fokus: Polering._

### Lab 8-a: "Lighthouse Race"

- **Syfte:** Analysverktyg.
- **Övningar:**
  1.  Ta en "trasig/långsam" sida (du får filerna).
  2.  Kör Lighthouse. Identifiera problem (stora bilder, ingen alt-text).
  3.  Fixa 3 problem och mät igen.
- **Utmaning:** Få 100 poäng i Accessibility.

### Lab 8-b: "Lazy Loading"

- **Syfte:** Spara bandbredd.
- **Övningar:**
  1.  En sida med 100 bilder (placeholders).
  2.  Lägg på `loading="lazy"` attributet.
  3.  Observera nätverkstrafiken vid scroll.
- **Utmaning:** Implementera en egen "Lazy load" med Intersection Observer (för mer kontroll).

### Lab 8-c: "Meta & Semantik"

- **Syfte:** Synlighet och struktur.
- **Övningar:**
  1.  Rätta till en sida som bara använder `<div>`. Byt till `<header>`, `<main>`, `<article>`.
  2.  Lägg till Open Graph taggar (för delning på sociala medier).
  3.  Testa hur det ser ut i en förhandsgranskare.
- **Utmaning:** Skapa en `sitemap.xml` struktur.
