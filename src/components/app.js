
angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = null;

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.searchResults = (text) => {
      youTube.search(text, this.setSearch);
    };
    this.setSearch = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    };

    this.$onInit = function () {
      this.searchResults('React Javascript');
    };

  },
  templateUrl: 'src/templates/app.html'
});
