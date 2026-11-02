# ChiPi Industry Talent Pipeline

A single-page business-to-business site for IT employers exploring ChiPi Technologies' fresher hiring pipeline. The page explains how an employer's role requirements guide candidate outreach, preparation, assessment, and recommendations. Employers retain control of interviews and final hiring decisions.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm start
```

The development site opens at `http://localhost:3000`.

## Project structure

- `src/App.js` assembles the page sections and shared header/footer.
- `src/components/` contains reusable interface elements such as the brand, buttons, header, and footer.
- `src/sections/` contains page sections. Each section keeps its JSX and CSS together.
- `src/Data/List of Colleges.json` supplies the college names displayed in the Employer Enquiry section.
- `src/assets/images/` contains images imported by React components.
- `public/` contains static assets, including the browser site icon.
- `src/styles/` contains shared design variables and global styles.

## Main sections

Hero, Hiring Challenge, How It Works, Why ChiPi, Pipeline Summary, and Employer Enquiry.

## Enquiry and college data

The Employer Enquiry call to action opens the configured Google Form in a new tab. To change it, update `GOOGLE_FORM_URL` in `src/sections/EmployerEnquiry/EmployerEnquiryUpdated.jsx`.

The college list is imported from `src/Data/List of Colleges.json`. Each entry has a display name and a logo path relative to `public/college-logos/`; store college logo assets in that folder and keep each entry's path matched to its file.

## Available scripts

```sh
npm start
npm run build
npm test -- --watchAll=false
```

`npm run build` creates the production bundle in `build/`. Tests use Create React App's Jest runner and React Testing Library.
