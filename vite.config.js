import { defineConfig } from 'vite';
import path from 'path';

const moduleToJs = () => {
  return {
    name: "module-to-js",
    transformIndexHtml(html) {
      return html.replace(/module/, "text/javascript");
    }
  };
};

const noAttr = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html) {
      return html.replace(/ crossorigin/g, "");
    }
  };
};

const addWebVitals = () => {
  return {
    name: "add-web-vitals",
    transformIndexHtml(html) {
      return html.replace(
        /<\/body>/,
        `<script type="module">
        import {onCLS, onFID, onLCP} from 'https://unpkg.com/web-vitals@3?module';
      
        function sendToAnalytics(metric) {
          const body = JSON.stringify(metric);
          (navigator.sendBeacon && navigator.sendBeacon('https://httpbin.org/status/200', body)) ||
            fetch('https://httpbin.org/status/200', {body, method: 'POST', keepalive: true});
        }
        
        onCLS(sendToAnalytics);
        onFID(sendToAnalytics);
        onLCP(sendToAnalytics);
      </script></head>`
      );
    }
  };
}

export default defineConfig({
  plugins: [
    moduleToJs(),
    noAttr(),
    addWebVitals(),
  ],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        menu: path.resolve(__dirname, 'menu.html'),
        news: path.resolve(__dirname, 'news.html'),
        newsDetail: path.resolve(__dirname, 'news-detail.html'),
        // Add other pages here
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    }
  }
});
