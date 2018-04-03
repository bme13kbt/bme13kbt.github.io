'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","style/geostyle.css","style/guidef.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 15
});