// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';
import { createTag } from './utils.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

function loadScript(url, callback, type) {
  const $head = document.querySelector('head');
  const $script = createTag('script', { src: url });
  if (type) {
    $script.setAttribute('type', type);
  }
  $head.append($script);
  $script.onload = callback;
  return $script;
}


async function loadAnalytics() {
  loadScript('https://www.googletagmanager.com/gtag/js?id=G-YSED1EH9V6', () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YSED1EH9V6');
  });
}

loadAnalytics();