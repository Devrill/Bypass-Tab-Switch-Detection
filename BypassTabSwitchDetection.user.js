// @name         Bypass Tab Switch Detection
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevents websites from detecting tab switches by overriding visibility and focus events.
// @author       Devrill
// @match        *://*/*
// @icon         https://i.imgur.com/721TjOG.png
// @updateURL    https://github.com/Devrill/Bypass-Tab-Switch-Detection/raw/main/BypassTabSwitchDetection.user.js
// @downloadURL  https://github.com/Devrill/Bypass-Tab-Switch-Detection/raw/main/BypassTabSwitchDetection.user.js
// @grant        none
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
