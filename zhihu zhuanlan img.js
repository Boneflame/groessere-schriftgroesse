// ==UserScript==
// @name         zhuanlan zhihu img
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replace img of zhuanlan to original
// @author       Hitomi Jamella Hoshino
// @include      https://zhuanlan.zhihu.com/*
// @grant        none
// ==/UserScript==


function replace() {
	var img;
	for (img of document.images) {
        if (img.hasAttribute("data-original") == 1) {
		    img.src = img.getAttribute("data-original");
            img.removeAttribute("data-original");
            img.removeAttribute("data-rawwidth");
            img.removeAttribute("data-rawheight");
            img.removeAttribute("width");
            img.removeAttribute("data-actualsrc");
        }
	}
};


new MutationObserver(replace).observe(document.body, {
	childList: true,
	subtree: true
});
