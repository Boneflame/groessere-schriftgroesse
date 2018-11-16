// ==UserScript==
// @name         Twitter expanded image height adjust
// @namespace    http://twitter.com/
// @version      0.1
// @description  Adjust single image's height of Twitter.
// @author       Hitomi Jamella Hoshino
// @include      https://twitter.com/*
// @grant        none
// ==/UserScript==

var single_photo = document.getElementsByClassName("AdaptiveMedia-singlePhoto");
for (var i = 0; i < single_photo.length; i++){
    var img = single_photo[i].firstChild.nextSibling.firstChild.nextSibling;
    var nHeight = img.naturalHeight;
    single_photo[i].style.paddingTop = nHeight + 'px';
}
