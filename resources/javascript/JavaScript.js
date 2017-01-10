"use strict";

$('document').ready(function () {
    //$('.playButton').hide();
    //$('.muteButton').hide();

    //$('.playButton').click(play);
    //$('.pauseButton').click(pause);
    //$('.muteButton').click(mute);
    //$('.unmuteButton').click(unmute);

    //$('.showParralaxButton').click(showParralaxOverlay);

    $('.fullScreenButton').click(goFullscreen);

    $('.videolink').click(playVideo);
    $('.closeButton').click(hideYTPlayer);

    $(".exa-video").hover(hoverVideo, hideVideo);

    //$("input").change(function () {
    //    var file = this.files[0];
    //    $('.background-video').attr('src', URL.createObjectURL(file));

    //    //var videoNode = document.querySelector('video');
    //    //var fileURL = URL.createObjectURL(file);
    //    //videoNode.src = fileURL;
    //});

    //$("#contact")
});

//function initMap() {
//    var mapElement = $('.googleMap')[0];
//    var map = new google.maps.Map(mapElement, {
//        center: { lat: 45.728331, lng: 21.296947 },
//        zoom: 17,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    });

//    var marker = new google.maps.Marker({
//        position: map.getCenter(),
//        map: map,
//        optimized: false,
//        icon: '/resources/images/mapMarker.png'
//    });
//}

function showParralaxOverlay() {
    if ($('.parralax-overlay').is(":visible")) {
        $('.parralax-overlay').addClass("hidden");
    } else {
        $('.parralax-overlay').removeClass("hidden");
    }
}

function playVideo(e) {
    let self = this;
    var i = 0;

    // all this bs just to have fade in/out... lolz
    if ($('.youtubePlayer').css('opacity') === "1") {
        hideYTPlayer();
        setTimeout(showYTPlayer(), 300);
    } else {
        ytMute();
        showYTPlayer();
    }
    //$('.youTubeVideo > iFrame').attr('src', 'https://www.youtube.com/embed/40DykbPa4Lc' + "?autoplay=1")
    $('.youTubeVideo > iFrame').attr('src', self.href + "?autoplay=1&fs=0")
    
    goFullScreenInternal(".youTubeVideo > iFrame");
    return false;
}

function showYTPlayer() {
    $('.youtubePlayer').css('opacity', '1');
    $('.youtubePlayer').css('z-index', '999');
}

function hideYTPlayer() {
    $('.youtubePlayer').css('opacity', '0');
    $('.youtubePlayer').css('z-index', '-1');
    $('.youTubeVideo > iFrame').attr('src', '');
}

function goFullscreen() {
  goFullScreenInternal("#bkVideoContainer");
}

function goFullScreenInternal(selector){
  var elem = $(selector)[0];
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}

function hoverVideo(e) {
    $('video', this).addClass('grow');
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).removeClass('grow');
    $('video', this).get(0).pause();
}

//function play() {
//    let mediaPlayer = document.getElementById('player');
//    mediaPlayer.play();
//    $('.pauseButton').show();
//    $('.playButton').hide();
//}

//function pause() {
//    let mediaPlayer = document.getElementById('player');
//    mediaPlayer.pause();
//    $('.playButton').show();
//    $('.pauseButton').hide();
//}

//function mute() {
//    document.getElementById('player').muted = true;
//    $('.unmuteButton').show();
//    $('.muteButton').hide();
//}

//function unmute() {
//    document.getElementById('player').muted = false;
//    $('.muteButton').show();
//    $('.unmuteButton').hide();
//}