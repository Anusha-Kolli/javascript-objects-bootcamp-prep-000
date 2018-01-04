var playlist = new Object({ breakfast: 'oatmeal' })
function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

function removeFromPlaylist(playlist, artistName){
 return delete playlist.artistName;

}

removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye");
