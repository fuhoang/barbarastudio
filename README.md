# Barbara Studio

One-page website for aesthetic beauty treatments focused on lashes, brows, and nails.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Project Structure

- `app/layout.tsx`: global metadata (including Open Graph and Twitter).
- `app/page.tsx`: homepage composition.
- `components/home/*`: homepage sections and shared content/types.
- `public/illustrations/*`: service illustrations.

## CI/CD

Workflows:

- `.github/workflows/ci.yml`: lint + build checks.
- `.github/workflows/cd-vercel.yml`: deploys production from `main`.

Required GitHub Actions secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Where to get them:

- `VERCEL_TOKEN`: Vercel -> Account Settings -> Tokens.
- `VERCEL_ORG_ID`: Vercel Team ID (or User ID for personal accounts).
- `VERCEL_PROJECT_ID`: Vercel Project -> Settings -> General -> Project ID.

## Accessibility Checklist

- Blind-friendly baseline (screen reader):
  - Every page has explicit landmarks (`header`, `main`, `section`, `nav`, `footer`/`region` where appropriate).
  - Skip-to-content pattern exists on the homepage and lands on the primary content container.
  - Core sections use heading hierarchy and linked labels (`aria-labelledby` where needed).
  - Decorative graphics in headings/service cards are marked as hidden to assistive technologies.
  - Interactive controls have accessible names (`aria-label`, `aria-labelledby`, or visible text).
  - Language toggle and menu state are exposed with appropriate `aria-*` attributes.
  - Keyboard focus is visible and logical in all major interactions.

- Deaf-friendly baseline:
  - All primary actions are text based (headings, buttons, labels) with strong readability.
  - Contact and social actions have clear labels and are not icon-only-only in meaning.
  - Contact instructions use clear language and avoid ambiguous icon-only dependency.
  - No essential content is only communicated through animation, color, or decoration.

- Visual accessibility:
  - Maintain clear contrast across primary text and interactive surfaces.
  - Keep hit targets at least 44x44 CSS pixels for small/important controls.
  - Keep decorative motion optional for reduced-motion users.

- Process:
  - Run `npm run a11y:ci` before merging UI-facing branches.
  - Keep `app` and `components` updates synchronized with updated copy in both languages.

### Accessibility commands

- `npm run a11y` — runs a lightweight accessibility guard for critical semantic and labeling checks.
- `npm run a11y:ci` — runs lint + tests + the accessibility guard.

## Git Flow

- `codex/feature/*` -> PR into `develop`
- `develop` -> merge into `main` for release
- pushes to `main` trigger Vercel production deploy
