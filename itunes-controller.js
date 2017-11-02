
function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) {
    console.log(songList);
    var song = document.getElementById("songs")
    var template = ''
    for (var i = 0; i < 50; i++) {
      var currentSong = songList[i];
      template += `
 
     
      <div class="col-md-3 album">
      <h3 class>${currentSong.artist}</h3>
      <h3>${currentSong.title}</h3>
      <img src="${currentSong.albumArt}" alt="" height="150px">
      <onclick="document.getElementById('id${currentSong.trackId}').play()">
      <h5>$${currentSong.price}</h5>
      <audio controls id="id${currentSong.trackId}">
        <source src="${currentSong.preview}" type="audio/ogg">
      </audio>
     
    </div>
    `
    }
    songs.innerHTML = template;
    
  }

}
var itunesCtrl = new ItunesController()