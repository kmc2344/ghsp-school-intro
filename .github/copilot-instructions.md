# Project Guidelines

## Communication Language
- Use Japanese for all user-facing outputs in this repository.
- Use Japanese for pull request titles, descriptions, and review comments unless the user explicitly requests another language.
- Use Japanese for commit messages by default.
- Keep technical terms precise; avoid overly casual wording in reviews.
- When source material is in English (logs/spec excerpts), explain the point in Japanese and include English quotes only as supporting evidence.

## Repository Scope
- The tracked repository is currently minimal: `README.md` and `.devcontainer/devcontainer.json`.
- Before proposing architecture-specific changes, inspect the latest tree and avoid assuming missing directories or frameworks.

## Build and Test
- Development container installs dependencies with `npm ci` in `postCreateCommand`.
- Port `4321` is forwarded and labeled as Astro dev server.
- If `package.json` scripts are added later, prefer using those scripts instead of ad-hoc commands.

## Editing Conventions
- Keep changes small and directly tied to the task.
- Do not duplicate long documentation in this file; link to future docs such as `docs/*.md` when they exist.
- When requirements are ambiguous, ask concise clarification questions before large edits.
