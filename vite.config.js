import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from 'path';
import fs from 'fs';

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

const certFile = path.resolve(__dirname, 'certificates/server.crt');
const keyFile = path.resolve(__dirname, 'certificates/server.key');

export default defineConfig({
  plugins: [
    moduleToJs(),
    noAttr(),
    addWebVitals(),
    basicSsl({
      /** name of certification */
      name: 'test',
      /** custom trust domains */
      domains: ['*.custom.com'],
      /** custom certification directory */
      certDir: './certificates',
    })
  ],
  server: {
    https: {
      cert: fs.readFileSync(certFile),
      key: fs.readFileSync(keyFile),
    },
  },
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
