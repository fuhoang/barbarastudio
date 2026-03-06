# Release Process

This project uses a strict branch flow:

- `main` is production.
- `develop` is the integration branch.

## Workflow

1. Create feature branch from `main` using prefix `codex/feature/*`.
2. Implement changes and keep commits scoped and small.
3. Open PR into `develop`.
4. Ensure required checks pass:
   - `Lint, Test and Build`
   - `Vercel`
5. Merge PR into `develop`.
6. Open PR from `develop` to `main`.
7. Merge only when required checks pass.
8. Verify deployment reflects in Vercel.

## CI/CD rules on `main`

`main` is branch-protected to require successful status checks before merge:

- `Lint, Test and Build`
- `Vercel`

## Cleanup

- Delete merged feature branches after merge.
- Keep `main` and `develop` in sync by pulling regularly.
