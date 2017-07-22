angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  controller: function () {

  },

  templateUrl: 'src/templates/videoListEntry.html'
});
