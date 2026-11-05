# ChiPi Industry Talent Pipeline

A single-page business-to-business site for IT employers exploring ChiPi Technologies' fresher hiring pipeline. The page explains how an employer's role requirements guide candidate outreach, preparation, assessment, and recommendations. Employers retain control of interviews and final hiring decisions.

## Run locally

Requirements: Node.js 20 (see `.nvmrc`) and npm.

```sh
npm install
npm start
```

The development site opens at `http://localhost:3000`.

## Project structure

- `src/App.js` assembles the page sections and shared header/footer.
- `src/components/` contains reusable interface elements such as the brand, buttons, header, footer, and error fallback.
- `src/sections/` contains page sections. Each section keeps its JSX and CSS together.
- `src/data/colleges.json` supplies the colleges displayed in the Employer Enquiry section.
- `src/data/siteLinks.js` holds the form URL, contact details, social links, and section links.
- `src/assets/images/` contains images imported by React components.
- `public/` contains static assets, including the browser site icon.
- `src/styles/` contains the design variables, global styles, and styles shared by page sections. Change colors, text sizes, and spacing in `src/styles/variables.css`.

## Main sections

Hero, Hiring Challenge, How It Works, Why ChiPi, Pipeline Summary, and Employer Enquiry.

## Enquiry and college data

The Employer Enquiry call to action opens the configured Google Form in a new tab. To change it, update `GOOGLE_FORM_URL` in `src/data/siteLinks.js`.

The college list is imported from `src/data/colleges.json`. Each entry has a display name and a logo path relative to `public/`; store college logo assets in `public/college-logos/` and keep each entry's path matched to its file. A test checks that they match.

## Available scripts

```sh
npm start
npm run build
npm run lint
npm test -- --watchAll=false
```

`npm run build` creates the production bundle in `build/`. Tests use Create React App's Jest runner and React Testing Library. GitHub Actions runs lint, tests, and the build on pushes to `main` and on pull requests.

## Media files

Export images at no more than twice their displayed width, as WebP where possible. Keep videos under 5 MB. The hero video was compressed with:

```sh
ffmpeg -i input.mp4 -vf "scale=720:1280" -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart hero-video.mp4
```

## Deployment

Upload the contents of `build/` to a static host and set these response headers there:

```text
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; connect-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Add any new script, such as analytics, to the Content-Security-Policy or the browser will block it.
