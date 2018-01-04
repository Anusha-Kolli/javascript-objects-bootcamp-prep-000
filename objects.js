 playlist = new Object({ breakfast: 'oatmeal' })
function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

function removeFromPlaylist(pen, artistName){
  const pen = Object.assign({}, playlist);
 delete pen.artistName;
 return pen;

}
removeFromPlaylist({ Kanye: 'Gold Digger' }, "Kanye");
