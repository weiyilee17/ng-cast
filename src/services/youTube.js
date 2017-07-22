angular.module('video-player')
.service('youTube', function($http) {
  this.search = (text, setSearch) => {
    // get request here

    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: text,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    }).then((response) => {
      setSearch(response.data.items);
    });

  };
});
