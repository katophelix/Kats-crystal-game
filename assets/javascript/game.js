

var green = 0;
var white = 0;
var red = 0;
var blue = 0;
var wins = 0;
var lose = 0;



var targetNumber = Math.floor(Math.random() * 102) + 19 ;
  console.log(targetNumber);
//players #
  var counter = 0;
  console.log(counter);

  $("#target-number").append(targetNumber);
  $("#counter").append(counter);
  $("#wins").append(wins);
  $("#lose").append(lose);

  //choose random Number for each image
	white = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	red = Math.floor((Math.random() * 12) + 1);
  green = Math.floor((Math.random() * 12) + 1);
  console.log(white)
  console.log(blue)
  console.log(red)
  console.log(green)

  var restart = function(){
     targetNumber = Math.floor(Math.random() * 102) + 19 ;
    console.log(targetNumber);
  //players #
    counter = 0;
    console.log(counter);
  
    $("#target-number").text(targetNumber);
  
    $("#counter").text(counter);
    

  }

//  -*/ $("#crystal-images").append(crystalImages);

$("#white-crystal").click(function(){
	counter = counter + white;
	$("#counter").text(counter);
	doNumsMatch();
});

$("#red-crystal").click(function(){
	counter = counter + red;
	$("#counter").text(counter);
	doNumsMatch();
});


$("#green-crystal").click(function(){
	counter = counter + green;
	$("#counter").text(counter);
	doNumsMatch();
});


$("#blue-crystal").click(function(){
	counter = counter + blue;
	$("#counter").text(counter);
  doNumsMatch();
});

 // All of the same game win-lose logic applies. So the rest remains unchanged.

 
    // alert("New score: " + counter);

    var doNumsMatch = function()
    {

    if (counter === targetNumber) {
      alert("You win!");
      wins = wins + 1;
      $("#wins").append(wins);
      restart();

    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      lose = lose + 1;
      $("#lose").append(lose);
      restart();
    }
// restart()
  };

  // restart();


// this is HTML 12 and the code i could not make work - need to come back to this later
// console.log(crystalImages);

  // Now for the hard part. Creating multiple crystals each with their own unique number value.
    // function randomVal() {
    //   return Math.floor(Math.random() * 12) + 1; //some random number generator; 
    // }
  // We begin by expanding our array to include four options.
//   var numberOptions = [10, 5, 3, 7];
//   var crystals = [
//          {value: randomVal(), src:'assets/images/white.jpg'},
//          {value: randomVal(), src:'assets/images/blue.jpg'}, 
//          {value: randomVal(), src:'assets/images/red.jpg'},
//         {value: randomVal(), src:'assets/images/green.jpg'},
//     ]
 //  add the crystal images and their attributes
    //var img = $("<img/>") //document.createElement("img")
    // var crystals = []
		// for (i=0; i< crystals.length; i++) {
		// 	var img = $("<img class='crystal-img'>");  // create image for every crystal
    //   var crystalValue = Math.floor(Math.random() * 12) +1 
    
		// 	img.attr("src", "assets/images/blue" + i +".jpg");
    //   img.attr("id", crystals[i]);  //$("img").attr("id", names of the crystals);
    //   img.attr("data-crystalValue", crystalValue); //add the random number as crystalValue
    //   crystalImages.append(img);
    //   console.log(img);
    //   console.log("here" + crystalValue);
    //   var attValue = img.attr("data-crystalValue");
    //   console.log(attValue);
	  // }
	

// var crystalImages = ['assets/images/crys1.jpg', 'assets/images/crys2.jpg', 
// 'assets/images/crys3.jpg', 'assets/images/crys4.jpg'];
//   // Next we create a for loop to create crystals for every numberOption.
//   for (var i = 0; i < 4; i++) {

//     // For each iteration, we will create an crystal
//     var imageCrystal = $("<img>");

//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
//     imageCrystal.addClass("crystal-image");

//     // Each crystal will be given a src link to the crystal image
//     // crystal.attr("src", "assets/images/crys1.jpg");
//     imageCrystal.attr('src', crystalImages[i]);

//     // Each crystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value. 
//     imageCrystal.attr("data-crystalvalue", randomVal() );

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     $("#crystals").append(imageCrystal);
//     console.log(randomVal);

//     console.log(crystalImages);
//   }

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });