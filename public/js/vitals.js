import {onCLS, onFID, onLCP} from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);

  (navigator.sendBeacon && navigator.sendBeacon('https://httpbin.org/status/200', body)) ||
    fetch('https://httpbin.org/status/200', {body, method: 'POST', keepalive: true});
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);