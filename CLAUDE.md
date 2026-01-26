# AI Coding Assistant Instructions

## 1. Architecture & Services

- **Framework**: Astro (SSG). Key config in `astro.config.mjs`.
- **Data Source**:
  - **Content Collections**: `src/content/` (`labs`, `assignments`, `about`) powered by MDX and Zod schemas (`src/content/config.ts`).
  - **Schedule**: `public/schedule.json` drives the weekly plan via Client-Side Rendering in `src/pages/veckoplan/index.astro`.
- **Routing**:
  - Dynamic routes (e.g., `src/pages/laborationer/[...slug].astro`) generate paths from collections.
  - **Key Pattern**: Lab slugs `X-y` (e.g., `1-a`) are grouped by `X` to create multi-part lab pages with local navigation.

## 2. Development Workflow

- **Build**: `npm run build` includes `astro check`. Always fix type errors before committing.
- **Images**:
  - Store in `public/img/`.
  - Reference in MDX as `/img/...`.
  - **Critical**: `rehype-urls` in `astro.config.mjs` automatically prepends `BASE_URL`. Do NOT manually add the base URL in MDX content.
- **Type Safety**: strict TypeScript is enforced (`astro/tsconfigs/strict`).

## 3. Styling & Conventions

- **Styling**: Vanilla CSS with CSS Variables defined in `src/layouts/Layout.astro` (e.g., `--lnuAccentColor`, `--primaryBgColor`). No Tailwind.
- **Components**:
  - `Layout.astro`: Base HTML shell with `<head>` and global styles.
  - `PageLayout.astro`: Standard wrapper for content pages.
  - Prefer scoped styles in `.astro` files.
- **Slug Logic**:
  - Lab pages rewrite slugs to remove hyphens (`1-a` -> `1a`) and use the first segment for grouping.

## 4. Cross-Component Integration

- **Search/Nav**: Groups of labs (`1-a`, `1-b`) generate a `localNav` prop in `[...slug].astro` passed to `LabsLocalNav.astro`.
- **Environment**: Use `import.meta.env.BASE_URL` for linking internal assets in Astro components (e.g., `icon_v3.png` in `Layout.astro`).
- **Client Scripts**: `veckoplan` uses a `<script>` tag to fetch `schedule.json` at runtime, calculating the current week dynamically.

## 5. Content & Audience Context

- **Audience**: University students (Course 1ME323). They have prior knowledge of HTML/CSS/JS (Webbteknik 1 & 2) but are still very much beginners when it comes to coding and javascript.
- **Language**: Swedish (sv-SE). Maintain a formal but encouraging academic tone.
- **Goal**: The site serves as the primary study guide, lab manual, and schedule. Clarity and navigation speed are prioritized over decorative elements. The main focus is on teaching programming concepts effectively, the students should learn by doing.
