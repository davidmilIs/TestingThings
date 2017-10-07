$(document).ready(function() {
  console.log("Hi There !");
  //createBoard();
  initializeMine();
  createBoard();
});

var size = 10;
var board = [];
var mine = 10;
var time = 0;
var timer;
var win = 0;
var lose = 0;
//Creer un board vide
function initializeBoard() {
    for (var i = 0; i < this.size; i++) {
      this.board.push([]);
      for (var j = 0; j < this.size; j++) {
        this.board[i].push("V");
      }
    }
  }

//Mets des mines dans le board
 function initializeMine() {
    initializeBoard();
    for (var i = 0; i < mine; i++) {
      var randomRow = Math.floor(Math.random() * (size));
      var randomCol = Math.floor(Math.random() * (size));
      while (board[randomRow][randomCol] == "M") {
        randomRow = Math.floor(Math.random() * (size));
        randomCol = Math.floor(Math.random() * (size));
      }
      board[randomRow][randomCol] = "M";
    }
  }
function startTimer() {
    timer = setTimeout(function() {
      if (!win && !lose) {
        time += 1;
        $(".time").text(time);
      } else {
        clearInterval(timer); //Stop Timer
      }
      startTimer();
    }, 1000);
  }
//Combine initializeBoard et initializeMine, puis créer l'affichage du board
function createBoard(){
  startTimer();
  initializeBoard();
  initializeMine();
  $(".board-container").append("<table class='board'></table>");
   for (var i = 0; i < size; i++) {
        $(".board").append("<tr class='board-row-" + i + "'></tr>");
        for (var j = 0; j < size; j++) {
          $(".board-row-" + i).append("<td class='board-square' data-row='" + i 
            +  "' data-col='" + j + "'><p>" 
            + board[i][j] + "</p></td>")
        }
      }
  }
