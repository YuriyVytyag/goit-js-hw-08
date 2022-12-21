import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
player
  .getCurrentTime()
  .then(function (event) {
    event.target.showSeconds;
  })
  .catch(function (error) {
    console.log(error);
  });
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const showSeconds = throttle(seconds => {
  console.log(seconds);
}, 1000);
player.on('timeUpdate', showSeconds);

player.setCurrentTime(30.456).then(function (seconds) {
  seconds = player.getCurrentTime();
});
