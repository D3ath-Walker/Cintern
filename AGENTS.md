# Repository Guidelines

Instructions for AI coding agents (Codex, Claude Code, Copilot, etc.) working in this repository. Read this fully before making any change.

## Project Structure

This repository is a Create React App single-page site. Application entry points are `src/index.js` and `src/App.js`. Shared UI components live in `src/components/`; page sections live in `src/sections/`, with each section's JSX and CSS kept together. Global styles and design variables are in `src/styles/` and `src/index.css`. Images are stored in `src/assets/images/` and static files in `public/`. Tests, when added, belong beside the relevant source or in CRA's supported `src` test locations.

Keep each top-level page section in its own component file and folder so `App.js` can compose the page from readable, independent sections. Keep section-specific markup, behavior, and styles with that section. When multiple sections need the same UI or behavior, extract one reusable component or shared style and use it from each section instead of copying it. Avoid files that export several unrelated page sections, duplicated implementations, and abstractions used only once without a clear reason. Shared styles may live in a common stylesheet; do not create empty section stylesheets just to match the folder pattern.

## Development and Build Commands

- `npm start` launches the local development server at `http://localhost:3000`.
- `npm run build` creates an optimized production build in `build/`.
- `npm test` starts Create React App's Jest test runner in watch mode; use `CI=true npm test -- --watchAll=false` for a single non-interactive run.
- Do not run `npm run eject`. Do not add new dependencies unless asked.

---

## The #1 Rule: Edit in Place, Never Append

A past problem in this repo: when asked to change something in a file, the agent **added the new code at the bottom of the file instead of modifying the existing code**. This left duplicated logic, dead code, and files that grew far too long. Do not repeat this.

### When asked to change, fix, or update something

1. **Open the file and find the exact existing lines** that implement that behavior (the function, component, JSX block, CSS rule, or constant).
2. **Modify or replace those lines directly**, where they are.
3. **Delete the old version.** Do not leave it behind, commented out or otherwise.
4. **Do not** add a second copy of a function, component, or style "with the fix" below the old one.
5. **Do not** append code to the end of a file unless it is genuinely new functionality with no existing home.

### Self-check before finishing

- [ ] Did I change the existing lines instead of adding a parallel version?
- [ ] Is there only **one** definition of every function, component, hook, constant, and CSS selector I touched?
- [ ] Did I remove everything the change made obsolete (old code, unused imports, unused state, unused CSS)?
- [ ] Did the file get longer? If so, is the growth justified by genuinely new functionality?
- [ ] Did I search the repo (e.g. `grep -rn "name" src/`) for other copies or usages that also need updating?

If any answer is "no", fix it before reporting the task as done.

### Bad vs. good example

**Request:** "Make the button text say 'Submit' instead of 'Send'."

Bad (appends a duplicate):

```jsx
function SendButton() {
  return <button>Send</button>;
}

// ...50 more lines...

function SendButton() {          // duplicate added at the bottom
  return <button>Submit</button>;
}
```

Good (edits the existing line):

```jsx
function SendButton() {
  return <button>Submit</button>;
}
```

---

## Making Changes

- **Smallest correct diff.** Touch only what the request requires. No drive-by refactors, renames, reformatting, or cleanup of unrelated code.
- **Read before writing.** Look at the whole file and how the code is used elsewhere before editing.
- **Fix root causes.** Fix the broken code itself; do not layer a workaround or override on top of it.
- **Use targeted edits.** Prefer replacing specific lines or blocks over rewriting or regenerating whole files. Only rewrite a whole file if explicitly asked or truly necessary, and say so.
- **Don't create new files** for something that belongs in an existing one. Never create "v2", "new", "fixed", or "copy" versions of files; update the original.
- **No leftover junk:** no commented-out old code, no placeholder TODOs, no unused imports or variables, no stray `console.log`.
- **Keep files focused.** If genuinely new functionality makes a file very long, say so and suggest splitting it rather than silently piling code on.

## Coding Style

Use JavaScript with React function components and two-space indentation. Name components and their directories in PascalCase (for example, `Hero/Hero.jsx`); use descriptive camelCase for variables and functions, and BEM-style class names for CSS (for example, `hero__copy`). Keep section-specific styles beside the section component and shared styles in the existing global style files. Follow the repository's Create React App ESLint configuration (`react-app`, `react-app/jest`); no separate formatter is configured.

- Reuse existing components, helpers, and styles before creating new ones. Search first.
- Never duplicate CSS: if a selector already exists, edit that rule instead of adding another one.

## Testing

The project uses Create React App's Jest and React Testing Library dependencies. Name tests `*.test.js` or `*.test.jsx`, colocate them with the component where practical, and cover user-visible behavior and responsive or interactive states when relevant. Run `npm test` while developing and `npm run build` to check production compilation. No coverage threshold is currently configured.

- If a change affects behavior that already has a test, update that test in place rather than adding a duplicate.
- Don't claim something works unless you actually ran it. If you couldn't run it, say so.

## Communication

- When done, give a short summary: which files changed and what changed in each.
- If the request is ambiguous, touches many files, or requires deleting something large, **ask first** instead of guessing.
- If you notice an unrelated bug or duplicated code, mention it but don't fix it unless asked.

## Commits and Pull Requests

No established commit-message convention is documented here. Write concise imperative subjects that describe the change (for example, `Fix mobile navigation toggle`). For pull requests, include a short summary, relevant issue link if available, verification steps, and screenshots for visual changes at desktop and mobile widths.

## Configuration

Do not commit secrets or local environment files. Keep static public resources in `public/` and imported application images in `src/assets/images/`.

## Never Do

- Append the same change to the end of a file instead of editing the existing code.
- Leave two versions of the same function, component, or style in the codebase.
- Edit `package-lock.json` by hand, or commit `node_modules/` or `build/`.
- Make large unrequested changes.
