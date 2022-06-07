// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript } from './scripts.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

async function loadAnalytics() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-YSED1EH9V6', () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YSED1EH9V6');
  });
}

loadAnalytics();