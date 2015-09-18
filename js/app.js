
$(document).ready(function(){
  
  var guess;
  var guessInt;
  var difference;  
  var count = 0;


  /* Generate random number */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var number = getRandomInt(1, 100);
  console.log(number);

/* Clears input */
var clear = function() {
  $("#userGuess").val("").focus();
}; 

/* Counts number of attempts */
  var displayCount = function() {
   $('#count').text(count);
  };
  
/*--- Displays feedback--*/
    
    var displayfeedback = function(feedback){
      $('#feedback').text(feedback);
    };

/*--- Sends message to user --*/
function hint(number, guessInt){
  if(checkInput(guessInt) == 1){
    difference = Math.abs(number-guessInt);

    if (difference >= 41) {
      displayfeedback("You are freezing!");
    }

    if (difference <= 40) {
      displayfeedback("You are cold!");
    }

    if (difference <= 30 ) {
      displayfeedback("You are getting warm!");
    }

    if (difference <= 20 ) {
      displayfeedback("You are getting hot!");
    }

    if (difference <= 10 ) {
      displayfeedback("You are getting very hot!");
    }
    if (difference == 0) {
      displayfeedback("You guessed it!" + " " + guessInt + "!" + "  "  + "Click 'NEW GAME' to begin a new game.");  
    }
  }
    return difference;
};
 


/*Checking input */

  var checkInput = function(guessInt){
    var validGuess = 1;
    if((isNaN(guessInt)) || (guessInt == " ") || ((guessInt < 1) || (guessInt > 100)) ){
      alert('Please choose a number from 1 to 100.');
      validGuess = 0;
    } 
    return validGuess;
   } 
  	
  /* submitting guess */
  	$("form").submit(function(event){
      event.preventDefault();
      guess = $("#userGuess").val();
      guessInt = parseInt(guess);
      $('#guessList').append('<li>' + guessInt + '</li>');
      clear();
      count++;
      displayCount();
      hint(number, guessInt);
  });


  /*New game*/
  $('.new').click(function() {
    location.reload();
  });

  /*--- Display information modal box ---*/
   $(".what").click(function(){
    $(".overlay").fadeIn(1000);
   });

  /*--- Hide information modal box ---*/
    $("a.close").click(function(){
     $(".overlay").fadeOut(1000);
    });

});


