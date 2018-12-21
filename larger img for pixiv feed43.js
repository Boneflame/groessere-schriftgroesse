// ==UserScript==
// @name              larger img for pixiv feed43
// @namespace         https://github.com/Boneflame/groessere-schriftgroesse
// @require
// @version           0.1
// @description       Replace img in RSS to larger one.
// @include           https://www.inoreader.com/*
// @grant             none
// ==/UserScript==


//Replace image's address

function replace() {
	var img, match;
	for (img of document.images) {
		if (match = img.src.match(/(https:\/\/i\.pximg\.net\/)c\/.+?(img-master.+)/)) {
            img.src = match[1] + match[2];
		}
	}
};

new MutationObserver(replace).observe(document.body, {
	childList: true,
	subtree: true
});
