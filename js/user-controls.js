
function respondToUser() {
  
  // TODO: if player is back to position
  // stop them
  
  // Player jumping controls
  if (keyWentDown("UP")) {
    player.velocityY = -4;
  }
  
  // Set velocityY to 4 when player reaches y=100
  if (player.y <= 100) {
    player.velocityY = 4;
  }

  //set player to stop when it reaches y=301
  if (player.y >=340){
    player.velocityY =0;
  }
}