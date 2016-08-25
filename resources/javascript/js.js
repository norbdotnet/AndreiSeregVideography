"use strict"

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    alert("hey Im ready");
    //do whatever you want here. Like, 
    player.playVideo();
}

function onPlayerStateChange(s) {
    console.debug("my state changed", s);
}

function mutefunc() {
    player.mute();
}

function pausefunc() {
    player.pauseVideo();
}