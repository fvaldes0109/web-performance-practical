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

To run a Lighthouse diagnostic, run:

```bash
lightouse http://localhost:5173
```

To generate a production build, run:

```bash
npm run build
```

To generate a build and a lighthouse report, run:

```bash
npm run build-and-report
```

## Other notes

- You can run a bunde analysis by running `npx vite bundle-visualizer`
- `web-vitals` is installed and added to production. A dummy endpoint is used to log the metrics (httpbin.org)
