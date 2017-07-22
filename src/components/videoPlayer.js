angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentVideo: '<'
  },
  controller: function($window) {
    // this.$onInit = function() {
    //   this.video = $window.exampleVideoData[0];
    // };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
