# Kursplanering (10 Veckor)

Här är den reviderade planeringen som följer din ursprungliga struktur för de första 8 veckorna, vilket ger de studerande 2 veckor i slutet för projektarbete.

## Vecka 1: Moduler & Versionshantering
*   Introduktion till moduler för strukturering av kod (import/export).
*   Git och GitHub: Regelbundna commits, branches och flöde.
*   Uppsättning av utvecklingsmiljö (eventuellt linter/prettier).

## Vecka 2: Objekt, JSON & Lagring
*   Javascript-objekt: Objekt-literaler, egenskaper och metoder.
*   Nyckelordet `this`: Hur det fungerar i objekt och funktioner.
*   JSON: Strukturering och konvertering (parse/stringify).
*   localStorage: Spara data i webbläsaren.

## Vecka 3: Asynkronitet & Datahantering
*   Asynkron kommunikation: `fetch`-API:t och Promises (async/await).
*   AJAX och HTTP-grunderna.
*   Informationsstrukturering: Hantera JSON-svar.
*   (Orientering kring XML vid behov).

## Vecka 4: Intro till Objektorienterad Programmering (OOP)
*   Klasser (`class`) och instansiering.
*   Konstruktorn.
*   Inkapsling: Publika och privata egenskaper.
*   Metoder och grundläggande arv.

## Vecka 5: DOM Scripting & Responsivitet
*   Manipulering av DOM med Javascript (skapa, ändra, ta bort element).
*   Responsiv CSS för dynamiskt innehåll (tekniker för att hantera exempelvis overflow).

## Vecka 6: API & Webbtjänster
*   Fördjupning i HTTP (GET, POST, Headers, Statuskoder).
*   Programmera mot publika API:er (hämta och visa data).
*   Säkerhetsaspekter (API-nycklar, CORS).

## Vecka 7: Formulär
*   Input-element och formulärhantering.
*   Validering: HTML5-attribut och JavaScript-validering.
*   Posta data till ett API (härma en "submit").

## Vecka 8: Optimering & SEO
*   Prestandaoptimering på klientsidan (laddningstider, resurser).
*   Website Performance Optimization (WPO) och användarupplevelse.
*   Sökmotoroptimering (SEO) ur ett tekniskt perspektiv.

## Vecka 9 & 10: Projektarbete
*   **Eget projektarbete:** Studerande knyter ihop kursens delar i en större applikation.
*   Handledning och "sista rycket".
*   Inlämning och redovisning.

---

# Förslag på Inlämningsuppgifter (Assignments)

Dessa inlämningsuppgifter är placerade strategiskt för att testa block av kunskap.

### Uppgift 1: "Objekt-bucket" (Vecka 1-2)
**Tema:** Moduler och Objekt.
Skapa en app (t.ex. en enkel inventarielista) där logiken ligger i moduler. Använd objekt för att representera data och spara listan i `localStorage`.
*   *Testar:* Git-flöde, moduler, objektstruktur och localStorage.

### Uppgift 2: "Data-hämtaren" (Vecka 3-4)
**Tema:** Async och OOP.
Bygg en klass-baserad komponent som hämtar data asynkront (fetch) och presenterar det. T.ex. en klass `WeatherWidget` som hämtar väderdata.
*   *Testar:* Asynkronitet, JSON-hantering och grundläggande OOP (klasser).

### Uppgift 3: "Det Levande Gränssnittet" (Vecka 5-6)
**Tema:** DOM och API.
Bygg en applikation som är helt dynamisk (inga hårdkodade element i HTML). Appen ska kommunicera med ett externt API (t.ex. hämta en lista med filmer) och rendera ett responsivt gränssnitt.
*   *Testar:* DOM-manipulation, HTTP/API-anrop och dynamisk CSS-hantering.

### Uppgift 4: "Formulär & Finish" (Vecka 7-8)
**Tema:** Formulär, Validering och Optimering.
Utvidga tidigare uppgift eller skapa en ny vy med ett komplext formulär (t.ex. "Checkout" eller "Registrera användare"). Fokus på robust validering och att sidan laddar snabbt/är optimerad.
*   *Testar:* Formulärhantering, POST-anrop, validering och prestandatänk/SEO.
