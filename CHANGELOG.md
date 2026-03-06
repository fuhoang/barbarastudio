# Changelog

## Unreleased
- Release process and branch strategy documentation added in `RELEASE.md`.

## [0.3.0] - 2026-03-06
### Added
- Added Vercel Analytics integration to root layout (`@vercel/analytics`).
- Added local font fallback strategy to avoid Google Fonts build-time network dependency.
- Added mobile-ready UI improvements, border consistency updates, and visual refinements to services/contact sections.

### Changed
- Enforced branch-protection rules on `main` requiring required CI checks before merge.
- Updated CI/CD check expectations to align with active workflows (`Lint, Test and Build`, `Vercel`).

### Fixed
- Standardized gold border styling across key sections.
- Kept main branch updates governed by CI success.
