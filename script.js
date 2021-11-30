// ==UserScript==
// @name         Simple purifier
// @namespace    https://alexeyev.me/
// @version      0.1
// @description  Purifies video by pressing 'p'
// @author       Vladislav Alexeyev <vlad@alexeyev.me>
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

document.addEventListener('keyup', (e) => {
    if(!location.href.includes('watch')) {
        return;
    }
    switch(e.keyCode){
        case 80:
            location.href='https://purify-video.github.io?v='+location.href;
    }
}, false);
