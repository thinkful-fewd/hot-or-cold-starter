$(document).ready(function(){
  /*--- Global Variable Set--- */
  var numberGuessed = false;
  var guessCount;
  var randomNumber;
  var guessFlagged;

  /*--- Sets new game ---*/
  newGame();

  /*--- Create a new game --*/
  function newGame(){
    numberGuessed = false;
    guessCount = 0;
    randomNumber = generateNumber();
    guessFlagged = true;
    $('#guessList').empty();
    countDisplay(guessCount);
    setFeedack('Make your Guess!');
  };

  /*--- Get value on form submit ---*/
  $('form').submit(function(event) {
    event.preventDefault();
    if (!numberGuessed) {
      userChoice = $('#userGuess').val();
      console.log('User guesses '+ userChoice);
      clearGuessField();
      shiftFocus();
      guessFlagged = checkUserInput(userChoice);
      if (!guessFlagged){
        console.log('input is valid');
        guessCount++
        countDisplay(guessCount);
        $('#guessList').append('<li>' + userChoice + '</li>');
        guessFlagged = checkUserGuess(Math.abs(randomNumber - userChoice))
      };
    } else {
      setFeedack('You already guessed the number!');
    };
  });

  /*--- Generate random number --*/
  function generateNumber(){
    var generatedNumber = Math.floor((Math.random() * 100) + 1);
    console.log("Randon number is " + generatedNumber);

    return generatedNumber;
  };

  /*--- Check that inut is a valid choice ---*/
  function checkUserInput(input) {
    if (isNaN(input)){
      console.log('You must enter a number');
      return true;
    } else if (input < 1 || input > 100) {
      console.log('Number must be between 1 and 100');
      return true;
    } else {
      return false;
    };
  };

  /*--- Checks user guess against random number ---*/
  function checkUserGuess(difference) {
    difference = Math.abs(difference);
    if (difference == 0) {
      setFeedack('You guessed it!');
      numberGuessed = true;
      return false;
    } else if (difference <= 5){
      setFeedack('You are getting hot!');
      return true;
    } else if (difference > 5 && difference <= 15) {
      setFeedack('You are getting warmer...');
      return true;
    } else if (difference > 15 && difference <= 30) {
      setFeedack('You are cold.');
      return true;  
    } else {
      setFeedack('You are freezing cold');
    };
  }

  /*--- Displays the number of guesses ---*/
  function countDisplay(count){
    $('#count').text(count);
  }

  /*--- Clear guess field after form submit ---*/
  function clearGuessField(){
    $('#userGuess').val('');
  };

  /*--- Return focus to guess field after submit ---*/
  function shiftFocus(){
    $('#userGuess').focus();
  };

  function setFeedack(userFeedback) {
    $('#feedback').text(userFeedback);
  }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Create new game on click ---*/
    $(".new").click(function(){
      newGame();
    });

});


