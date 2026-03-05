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

## Git Flow

- `codex/feature/*` -> PR into `develop`
- `develop` -> merge into `main` for release
- pushes to `main` trigger Vercel production deploy
