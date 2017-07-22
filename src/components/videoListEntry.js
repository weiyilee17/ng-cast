angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    item: '<',
    selectVideo: '<'
  },
  controller: function () {

  },

  templateUrl: 'src/templates/videoListEntry.html'
});
