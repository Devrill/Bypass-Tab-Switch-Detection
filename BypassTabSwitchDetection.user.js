// ==UserScript==
// @name         Bypass Tab Switch Detection
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevents websites from detecting tab switches by overriding visibility and focus events.
// @author       Devrill
// @match        *://*/*
// @icon         https://i.imgur.com/721TjOG.png
// @license      MIT
// @locale       en
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/525742/Bypass%20Tab%20Switch%20Detection.user.js
// @updateURL https://update.greasyfork.org/scripts/525742/Bypass%20Tab%20Switch%20Detection.meta.js
// ==/UserScript==



(function() {
    'use strict';

    // Override document.hidden and document.visibilityState
    Object.defineProperty(document, 'hidden', {
        get: function() {
            return false;
        }
    });

    Object.defineProperty(document, 'visibilityState', {
        get: function() {
            return 'visible';
        }
    });

    // Stop blur and focus events from being triggered
    window.addEventListener('blur', function(e) {
        e.stopImmediatePropagation();
    }, true);

    window.addEventListener('focus', function(e) {
        e.stopImmediatePropagation();
    }, true);

    console.log('Tab switch detection bypassed!');
})();
