# Web Performance Practice

## Hosting

This site is hosted on Netlify, you can access it [here](https://main--leafy-zuccutto-d6c3de.netlify.app/)

## Initial Lightouse Diagnostic

- Largest Contentful Paint takes too long (Probably due to the video on index and images)
- Render blocking resources should be optimized and deferred if possible
- Images should be served in other formats, like webp
- Unused JS and CSS should be reduced
- CSS and JS is not minified
- Some scripts and styles are being served locally

## Solved

- Preload render blocking resources like fonts and styles
- All images were converted to .webp and compressed
- Add vite for bundling and minification
- Resources like JQuery and Bootstrap are now served from a CDN

## Requirements

- An installed version of Node.js
- Lightouse CLI installed globally (`npm install -g lighthouse`)

## How to run

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

## Assignement tasks

- Added routes and .tsx files for each page
- The navbar, footer and reservation modal are now components
- Special Menus images on the main page are now using the built-in Image component
- Links in the navbar are now using the Link component
- Publishing a reservation now calls the `/api/reserve` endpoint, which posts the data to a mock endpoint
- Website is deployed to Vercel [here](https://web-performance-practical.vercel.app/)
