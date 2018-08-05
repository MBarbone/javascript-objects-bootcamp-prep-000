var playlist = {Slowdive: "Alison", MyBloodyValentine: "Somtimes"};

function updatePlaylist(playlist, artist, song) {
  playlist.PhilOchs = "Here's to the State of Mississippi";
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Slowdive;
  return playlist;
}