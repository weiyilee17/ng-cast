angular.module('video-player')


.component('search', {
  bindings: {
    result: '<'
  },

  controller: function(youTube) {

  },
  templateUrl: 'src/templates/search.html'
});
