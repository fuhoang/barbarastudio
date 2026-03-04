# Git Workflow

This repository uses a Git Flow-style branching model.

## Branches

- `main`: production-ready code
- `develop`: integration branch for upcoming work
- `feature/*`: new features
- `release/*`: release preparation
- `hotfix/*`: urgent production fixes
- `support/*`: long-term support streams (optional)

## Start New Work

```bash
git switch develop
git pull origin develop
git switch -c feature/<short-name>
```

## Finish Feature

```bash
git add .
git commit -m "feat: <what changed>"
git push -u origin feature/<short-name>
```

Open a PR from `feature/<short-name>` into `develop`.

## Prepare a Release

```bash
git switch develop
git pull origin develop
git switch -c release/<version>
```

Do final checks, version bumps, docs/changelog updates, then:

```bash
git add .
git commit -m "chore: prepare release <version>"
git push -u origin release/<version>
```

Open PRs:

- `release/<version>` -> `main`
- `release/<version>` -> `develop` (to sync any release-only commits)

## Hotfix Production

```bash
git switch main
git pull origin main
git switch -c hotfix/<short-name>
```

After fixing:

```bash
git add .
git commit -m "fix: <hotfix summary>"
git push -u origin hotfix/<short-name>
```

Open PRs:

- `hotfix/<short-name>` -> `main`
- `hotfix/<short-name>` -> `develop`

## Helpful Commands

```bash
git branch
git status
git log --oneline --decorate --graph --all
```
