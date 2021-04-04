var canvas;
var gameState = 0;
var playerCount = 0;
var database;
var form,game,player;
var allPlayers;
var car1, car2, car3, car4, cars;





function setup(){
  database = firebase.database();
  canvas = createCanvas(windowWidth,windowHeight);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  if(playerCount === 4)
     game.update(1)

  if(gameState === 1){
    clear();
    game.play();
  }
}

