// ==UserScript==
// @name         Display Slack Emoji Better
// @namespace    https://github.com/omgmog/better-slack-emoji-manager-display/
// @version      0.1
// @description  Displays Slack Emoji at all sizes
// @author       Max Glenister <moglenstar@gmail.com>
// @match        https://*.slack.com/customize/emoji
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    var init = function() {
        var emojis = document.querySelectorAll('.emoji-wrapper');
        var count = emojis.length;
        for (var i = 0; i < count; i++) {
            var emoji1 = emojis[i];
            var parent = emoji1.parentNode;
            var emoji2 = emoji1.cloneNode();
            var emoji3 = emoji1.cloneNode();
            var emoji4 = emoji1.cloneNode();
            // Maximum uploaded size 128x128
            emoji1.style.width = emoji1.style.height = "128px";
            emoji1.style.marginRight = "10px";
            emoji1.style.backgroundSize = "initial";
            // Standalone 32x32
            emoji2.style.width = emoji2.style.height = "32px";
            emoji2.style.marginRight = "10px";
            // Small 22x22 with text
            emoji3.style.width = emoji3.style.height = "22px";
            emoji3.style.marginRight = "10px";
            // Smaller 16x16 in box
            emoji4.style.width = emoji4.style.height = "22px";
            emoji4.style.marginRight = "10px";
            emoji4.style.padding = "3px";
            emoji4.style.border = "3px solid #fff";
            emoji4.style.boxShadow = "0 0 0 1px #E8E8E8";
            emoji4.style.borderRadius = "5px";
            parent.appendChild(emoji2);
            parent.appendChild(emoji3);
            parent.appendChild(emoji4);
        }
    };
    init();
    setTimeout(function() {}, 1000);
})();
