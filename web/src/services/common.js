export function captureUserMedia(callback) {
  var params = { audio: true, video: false };

  navigator.getUserMedia(params, callback, (error) => {
    alert(JSON.stringify(error));
  });
};

export function getLastSongId(songs) {
  if (songs.length === 0) {
    return 0
  }
  return songs.map(song => song.id).sort((a, b) => a - b).pop()
}
