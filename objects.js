var playlist = new Object({ breakfast: 'oatmeal' })
function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}
updatePlaylist(playlist, artistName,songTitle);
