
angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = () => {

    };
  },
  templateUrl: 'src/templates/app.html'
});
