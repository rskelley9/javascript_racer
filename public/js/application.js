$(document).ready(function() {
  var player1 = 1
  var player2 = 1
  var boardlength1 = $('#player1_strip td').length
  var boardlength2 = $('#player2_strip td').length
  $(document).on('keyup', function(event) {
    //q = 81
    //p = 80
    if (event.keyCode == 81) 

    {
      if (player1 < boardlength1)
      {
        $('#player1_strip .active').removeClass("active").next().addClass("active");
        player1++;
      }
      else
      {
        alert("Player 1 Wins!")
      }
    }
    else if (event.keyCode == 80)
    {
      if (player2 < boardlength2)
      {
        $('#player2_strip .active').removeClass("active").next().addClass("active");
        player2++;
      }
      else
      {
        alert("Player 2 Wins!")
      }
    } 
  });
});

// function Game(player1, player2) {
//   this.player1 = player1
//   this.player2 = player2
//   this.start_time = null
//   this.end_time = null
//   this.gameid = null
//   this.winner = null
// }

// function Player(name) {
//   this.name = name
//   this.position = 1
// }

// Player.prototype.updatePosition = function() {
//   $(document).on('keyup', function(event) {
//     this.position++
//     this.render
//   }) 
// };

// Game.prototype.getGameID = function(){
//   this.gameId = $('table').attr('id') 
// }

// Game.prototype.checkKeyandUpdate = function(event) {
//   if (event.keyCode == 81) {
//     this.player1.updatePosition()
//   }
//   else if (event.keyCode == 80) {
//     this.player2.updatePosition()
//   }
// }

// Game.prototype.checkWinner = function() {
//   var boardlength = $('#player1_strip td').length

//   if (this.player1.position == boardlength)
//   {
//     return this.player1
//   } 
//   else if (this.player2.position == boardlength)
//   {
//     return this.player2
//   }
//   else
//   {
//     return null
//   }
// };

// Game.prototype.displayWinner = function() {
//   alert(''+ this.winner + " wins!")
// }
// Game.prototype.render = function() {
//   $('.active').removeClass('active')

//   $("#" + this.player1.name + "td:nth-child" + '(' + this.player1.position + ')').addClass('active')

//   $("#" + this.player2.name + "td:nth-child" + '(' + this.player2.position + ')').addClass('active')
// }


// Game.prototype.startTimer = function(){
//   this.time_start = new Date();
// };

// Game.prototype.endTimer = function(){
//   this.time_end = new Date();
// };

// Game.prototype.packageData = function(){
//   this.data = {winner: this.winner}
// }

// Game.prototype.postandRoute = function(){
//   var url = '/winner'
//   var data = this.data();

//   $.post(url, data, function(response){
//     console.log(response)
//   });
// } 

// Game.prototype.play = function(event){
//   this.startTimer();
//   while (this.checkWinner() == null)
//   {
//     this.render()
//     this.checkKeyandUpdate(event)
//     this.checkWinner()
//   }

//   var winner = this.checkWinner();
//   this.winner = winner;
//   this.endTimer();
//   this.packageData();
//   this.postandRoute();
//   alert(this.winner  + " wins!")
// }


// $('form').on('submit', function() {

//   if(document.getElementById("player1_strip") != null) {

//   var player1 = new Player("Ryan");
//   var player2 = new Player("Steve");
//   var game = new Game(player1, player2)

//   game.play(event);

//   alert("this works")
  
//   console.log(game.winner);
  
//   }

//   });
  



