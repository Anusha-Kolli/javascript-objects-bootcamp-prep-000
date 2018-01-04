 playlist = new Object({ breakfast: 'oatmeal' })
function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

function removeFromPlaylist(playlist, artistName){
  const newObj = Object.assign({}, playlist);
 delete newObj.artistName;
 return newObj;

}
removeFromPlaylist({ Kanye: 'Gold Digger' }, "Kanye");
