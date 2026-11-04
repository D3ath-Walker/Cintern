Description:
This file contains the rule to be followed for all the code review.

Report every violation with its rule number and `file:line`. Part A comes from `AGENTS.md`. Part B adds rules this codebase needs that `AGENTS.md` does not cover.

# Part A: Rules from AGENTS.md

## Project structure
- **A1.** Read `AGENTS.md` fully before making any change.
- **A2.** Application entry points stay `src/index.js` and `src/App.js`.
- **A3.** Shared UI components live in `src/components/`.
- **A4.** Page sections live in `src/sections/`, with each section's JSX and CSS kept together.
- **A5.** Global styles and design variables live in `src/styles/` and `src/index.css`.
- **A6.** Images live in `src/assets/images/` and static files in `public/`.
- **A7.** Tests live beside the relevant source or in CRA's supported `src` test locations.
- **A8.** Each top-level page section has its own component file and folder, so `App.js` composes the page from readable, independent sections.
- **A9.** Section-specific markup, behavior, and styles stay with that section.
- **A10.** UI or behavior needed by multiple sections is extracted into one reusable component or shared style, not copied.
- **A11.** No file exports several unrelated page sections.
- **A12.** No duplicated implementations.
- **A13.** No abstraction used only once without a clear reason.
- **A14.** Shared styles may live in a common stylesheet. Do not create empty section stylesheets just to match the folder pattern.

## Commands and dependencies
- **A15.** Use `npm start` for the dev server at `http://localhost:3000` and `npm run build` for a production build in `build/`.
- **A16.** `npm test` runs in watch mode. Use `CI=true npm test -- --watchAll=false` for a single non-interactive run.
- **A17.** Do not run `npm run eject`.
- **A18.** Do not add new dependencies unless asked.

## Edit in place, never append (the #1 rule)
- **A19.** Find the exact existing lines that implement the behavior (function, component, JSX block, CSS rule, or constant) before changing it.
- **A20.** Modify or replace those lines directly, where they are.
- **A21.** Delete the old version. Do not leave it behind, commented out or otherwise.
- **A22.** Do not add a second copy of a function, component, or style "with the fix" below the old one.
- **A23.** Append to the end of a file only for genuinely new functionality with no existing home.

## Self-check before finishing
- **A24.** The change edits existing lines instead of adding a parallel version.
- **A25.** There is only one definition of every function, component, hook, constant, and CSS selector touched.
- **A26.** Everything the change made obsolete is removed: old code, unused imports, unused state, and unused CSS.
- **A27.** If a file got longer, genuinely new functionality justifies the growth.
- **A28.** The repo was searched (for example `grep -rn "name" src/`) for other copies or usages that also need updating.
- **A29.** If any self-check answer is "no", it is fixed before the task is reported as done.

## Making changes
- **A30.** Make the smallest correct diff. Touch only what the request requires, with no drive-by refactors, renames, reformatting, or cleanup of unrelated code.
- **A31.** Read before writing: the whole file, and how the code is used elsewhere.
- **A32.** Fix root causes. Do not layer a workaround or override on top of broken code.
- **A33.** Prefer targeted edits over rewriting or regenerating whole files. Rewrite a whole file only if explicitly asked or truly necessary, and say so.
- **A34.** Do not create a new file for something that belongs in an existing one.
- **A35.** Never create "v2", "new", "fixed", or "copy" versions of files. Update the original.
- **A36.** Leave no junk: no commented-out old code, placeholder TODOs, unused imports or variables, or stray `console.log`.
- **A37.** Keep files focused. If genuinely new functionality makes a file very long, say so and suggest splitting it.

## Coding style
- **A38.** Use JavaScript with React function components.
- **A39.** Use two-space indentation.
- **A40.** Name components and their directories in PascalCase (for example `Hero/Hero.jsx`).
- **A41.** Use descriptive camelCase for variables and functions.
- **A42.** Use BEM-style CSS class names (for example `hero__copy`).
- **A43.** Keep section-specific styles beside the section component and shared styles in the existing global style files.
- **A44.** Follow the repo's ESLint configuration (`react-app`, `react-app/jest`). No separate formatter is configured.
- **A45.** Reuse existing components, helpers, and styles before creating new ones. Search first.
- **A46.** Never duplicate CSS. If a selector already exists, edit that rule instead of adding another one.

## Testing
- **A47.** Name tests `*.test.js` or `*.test.jsx`, and colocate them with the component where practical.
- **A48.** Cover user-visible behavior, and responsive or interactive states when relevant.
- **A49.** Run `npm test` while developing and `npm run build` to check production compilation. No coverage threshold is configured.
- **A50.** If a change affects behavior that already has a test, update that test in place instead of adding a duplicate.
- **A51.** Do not claim something works unless it was actually run. If it could not be run, say so.

## Communication
- **A52.** When done, give a short summary of which files changed and what changed in each.
- **A53.** If a request is ambiguous, touches many files, or requires deleting something large, ask first.
- **A54.** Mention unrelated bugs or duplicated code, but do not fix them unless asked.

## Commits and pull requests
- **A55.** Write concise imperative commit subjects (for example `Fix mobile navigation toggle`).
- **A56.** Pull requests include a short summary, a relevant issue link if available, and verification steps.
- **A57.** Pull requests with visual changes include screenshots at desktop and mobile widths.

## Configuration
- **A58.** Do not commit secrets or local environment files.
- **A59.** Keep static public resources in `public/` and imported application images in `src/assets/images/`.

## Never do
- **A60.** Append the same change to the end of a file instead of editing the existing code.
- **A61.** Leave two versions of the same function, component, or style in the codebase.
- **A62.** Edit `package-lock.json` by hand.
- **A63.** Commit `node_modules/` or `build/`.
- **A64.** Make large unrequested changes.

# Part B: Additional rules this codebase needs

## Build and tests
- **B1.** The full test suite and `npm run build` must pass before approval. Report a test that already fails as a blocker, even if the change did not cause it.

## Security
- **B2.** Do not use raw HTML or dynamic code: `dangerouslySetInnerHTML`, `innerHTML`, `document.write`, `eval`, or `new Function`.
- **B3.** `href` and `src` values come only from constants or reviewed data, never from URL parameters or other user-controlled input. Allowed link types are `https:`, `tel:`, `mailto:`, and in-page `#` anchors.
- **B4.** Every `target="_blank"` link has `rel="noreferrer"` or `rel="noopener noreferrer"`, including links rendered through `Button`.
- **B5.** Everything in `REACT_APP_*` variables, `src/`, and `public/` is public once deployed, so none of it may hold secrets or private data. If a plain `.env` file is added, it must be in `.gitignore`.
- **B6.** Production hosting sets Content-Security-Policy (including `frame-ancestors`), HSTS, `X-Content-Type-Options`, and `Referrer-Policy`. If the hosting config is not in the repo, report these as unverified, not as passing.
- **B7.** Any new external script, font, iframe, or tracker needs a stated reason and must be allowed by the Content-Security-Policy.
- **B8.** Triage every high or critical `npm audit` result by whether it ships to the browser or only runs at build or dev time. Do not ignore results or apply `npm audit fix --force` without review.

## Centralized variables and content
- **B9.** Colors come from variables in `src/styles/variables.css`. New or changed CSS must not add hard-coded colors, and a missing color is added as a variable.
- **B10.** A `var()` fallback is either removed or identical to the variable's value.
- **B11.** Layout values used in more than one place, such as header height and z-index layers, are variables. Page-edge spacing uses `--content-gutter`, not a raw `vw` value.
- **B12.** Media queries use only the site breakpoints: 420, 650, 700, 850, and 1200px. Move the existing 600 and 950px queries onto this list when those rules are next changed.
- **B13.** Contact details, social URLs, section links, and other values used more than once live in `src/Data/siteLinks.js`, not in component files.

## Naming and code structure
- **B14.** A component's file name matches its folder and exported component. Names do not contain status words such as `Updated` or `Refresh`.
- **B15.** Non-component folders are lowercase, and file names in `src/` contain no spaces.
- **B16.** The two-space rule (A39) applies to JS and JSX. CSS files use four spaces, so do not reformat them.
- **B17.** Local variables do not shadow browser or build globals such as `process`, `window`, `document`, or `location`.
- **B18.** A component imports the CSS it depends on and does not use another component's BEM classes. Move shared classes to a shared stylesheet.
- **B19.** Update `README.md` in the same change when code it describes moves or changes.
- **B20.** Dead code (A26, A36) includes branches that can never run and CSS selectors that match nothing.

## Accessibility
- **B21.** Text is at least 12px at every screen width.
- **B22.** Text contrast is at least 4.5:1, or 3:1 for large text. Check it against glass and gradient surfaces and in every animation state.
- **B23.** Every interactive element has a visible `:focus-visible` style that is clear on the dark background.
- **B24.** Decorative characters and icons such as `→`, `✓`, and `♧` have `aria-hidden="true"`.
- **B25.** The page has a skip link to the main content as its first focusable element.
- **B26.** A toggle button either changes its label or uses `aria-pressed`, not both.
- **B27.** Menus and dialogs close on Escape, move focus in when opened, and return focus when closed. While a dialog is open, the page behind it cannot scroll or take focus.
- **B28.** Content that moves for more than five seconds has a pause control that works by keyboard and touch, not just hover.
- **B29.** All motion respects `prefers-reduced-motion`, including smooth scrolling, hover movement, and video autoplay.
- **B30.** Videos with speech have captions.
- **B31.** A video that autoplays starts muted.

## Performance
- **B32.** Images are under 300 KB and no wider than twice their displayed width. Videos are under 5 MB.
- **B33.** Images below the first screen use `loading="lazy"` and have their space reserved to avoid layout shift.
- **B34.** Load fonts with `<link>` and `preconnect` in `public/index.html` or self-host them, not with CSS `@import`. Every font weight used in CSS must be one that is loaded.
- **B35.** Infinite animations change only `transform` or `opacity`.
- **B36.** Scroll and resize handlers do not read layout on every event. Use `IntersectionObserver` or `requestAnimationFrame`. Every listener, timer, and observer is cleaned up.

## Responsive layout
- **B37.** Nothing overflows horizontally from 320 to 1920px wide. `overflow-x: clip` or `hidden` on `html`, `body`, or `#root` does not count as a fix.
- **B38.** Containers that hold text do not have a fixed `height`.
- **B39.** Check layout changes on both sides of each breakpoint, and confirm the fixed header does not cover content or anchor targets.
- **B40.** Logos and videos keep their aspect ratio, so do not apply non-uniform `scale` or `scaleX` to them.

## Content and SEO
- **B41.** Public numbers and claims have a source and agree with the data on the page. Third-party logos are used with permission.
- **B42.** Links go where their labels say, use official accounts, and use standard link types (for example `mailto:` for email).
- **B43.** The site has a canonical URL, `og:url`, `og:image`, `robots.txt`, and `sitemap.xml`.
- **B44.** In `List of Colleges.json`, names are unique because they are used as React keys, every `logo` path matches a file, and no logo file is left unused.