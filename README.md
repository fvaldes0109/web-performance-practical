## Initial Lightouse Diagnostic

- Largest Contentful Paint takes too long (Probably due to the video on index and images)
- Render blocking resources should be optimized and deferred if possible
- Images should be served in other formats
- Unused JS and CSS should be reduced
- Minify CSS and JS
- Properly size and compress images

## Solved

- Preload render blocking resources like fonts and styles
- All images were converted to .webp
