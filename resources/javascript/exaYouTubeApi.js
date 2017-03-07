"use strict";

var player;
var playPauseButtons = [];
var muteUnmuteButtons = [];

function onYouTubeIframeAPIReady() {
  let playerContainer = $("#bkVideoContainer div")[0];

  player = new YT.Player(playerContainer, {
    videoId: playerContainer.dataset.id,
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'enablejsapi': 1,
      'loop': 1,
      'showinfo': 0,
      'iv_load_policy': 3,
      'modestbranding': 1,
      'playlist': playerContainer.dataset.id
    },
    events: {
      'onReady': onPlayerReady
    }
  });

  playPauseButtons = $('.playPauseButton');
  playPauseButtons.click(ytPlayPause);
  muteUnmuteButtons = $('.muteUnmuteButton');
  muteUnmuteButtons.click(ytMuteUnmute);
}

function onPlayerReady() {}

function ytPlayPause() {
  if (player === undefined) return false;

  let isPaused = (player.getPlayerState() == 2) || (player.getPlayerState() == -1);

  if (isPaused) {
    ytPlay();
  } else {
    ytPause();
  }
}

function ytPlay() {
  if (player === undefined) return false;

  player.playVideo();
  playPauseButtons.removeClass("fa-play");
  playPauseButtons.addClass("fa-pause");
}

function ytPause() {
  if (player === undefined) return false;
  player.pauseVideo();
  playPauseButtons.removeClass("fa-pause");
  playPauseButtons.addClass("fa-play");
}

function ytMuteUnmute() {
  if (player === undefined) return false;

  let isMuted = player.isMuted();

  if (isMuted) {
    ytUnmute();
  } else {
    ytMute();
  }
}

function ytMute() {
  if (player === undefined) return false;
  
  player.mute();
  muteUnmuteButtons.removeClass("fa-volume-up");
  muteUnmuteButtons.addClass("fa-volume-off");
}

function ytUnmute() {
  if (player === undefined) return false;
  
  player.unMute();
  muteUnmuteButtons.removeClass("fa-volume-off");
  muteUnmuteButtons.addClass("fa-volume-up");
}