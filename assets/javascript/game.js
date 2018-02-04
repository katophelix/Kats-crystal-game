$(document).ready(function () {

var green = 0;
var white = 0;
var red = 0;
var blue = 0;
var wins = 0;
var lose = 0;
var gameStatus = true;



var targetNumber = Math.floor(Math.random() * 102) + 19 ;
$("#you-win").hide();
$("#you-lose").hide();
$("#start-button").hide();
//players #
  var counter = 0;

  $("#target-number").append(targetNumber);
  $("#counter").append(counter);
  $("#wins").append(wins);
  $("#lose").append(lose);

  //choose random Number for each image
	white = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	red = Math.floor((Math.random() * 12) + 1);
  green = Math.floor((Math.random() * 12) + 1);

  var restart = function(){
     targetNumber = Math.floor(Math.random() * 102) + 19 ;
  //players #
    counter = 0;
    gameStatus = true;
    $("#you-win").hide();
    $("#you-lose").hide();
    $("#start-button").hide();
  
    $("#target-number").text(targetNumber);
  
    $("#counter").text(counter);
  }



//  -*/ $("#crystal-images").append(crystalImages);

$("#white-crystal").click(function(){
	counter += white;
	$("#counter").text(counter);
	doNumsMatch();
});

$("#red-crystal").click(function(){
	counter += red;
	$("#counter").text(counter);
	doNumsMatch();
});


$("#green-crystal").click(function(){
	counter += green;
	$("#counter").text(counter);
	doNumsMatch();
});


$("#blue-crystal").click(function(){
	counter += blue;
	$("#counter").text(counter);
  doNumsMatch();
});



    var doNumsMatch = function()
    {
      

    if (counter === targetNumber) {
      if(gameStatus){
      $("#you-win").show();
      wins++;
      $("#wins").text(wins);
      $("#start-button").show();
      }
      gameStatus = false;
    

    }

    else if (counter >= targetNumber) {
      if(gameStatus){
        $("#you-lose").show();
        lose++;
        $("#lose").text(lose);
      $("#start-button").show();

      }
   
      gameStatus = false;
     
      
      }
    };

  

  $("#start-button").on("click", restart);
})

 