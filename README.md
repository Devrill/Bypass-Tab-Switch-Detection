# Bypass-Tab-Switch-Detection
Tampermonkey script that overrides the document.hidden and document.visibilityState properties to prevent tab switch detection


## Installation

1. **Install Tampermonkey**:
   If you haven't already, you need to install the Tampermonkey browser extension. You can find it for various browsers:
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   - [Tampermonkey for Opera/OperaGX](https://addons.opera.com/en-gb/extensions/details/tampermonkey-beta/)

2. **Install the Script**:
   Go to this [link](https://greasyfork.org/en/scripts/525742-bypass-tab-switch-detection) and Install this script 
4. **Enable the Script**:
   Enable the script by clicking the switch next to the script name in the Tampermonkey Dashboard.
5. **Test the Script**:
    Navigate to a website that uses tab switch detection. The script should prevent the website from detecting when you switch tabs.
   
## Limitations
   1. :
    This script may not work for all websites, especially those that use more advanced detection methods (e.g., server-side tracking or WebRTC).
   2. :
    Some websites may employ additional checks, such as monitoring mouse movements or keyboard activity, to detect user presence.
   
