$(document).ready(function(){
  /*--- Global Variable Set--- */
  var numberGuessed = false;
  var guessCount;
  var randomNumber;

  /*--- Sets new game ---*/
  newGame();

  /*--- Create a new game --*/
  function newGame(){
    numberGuessed = false;
    guessCount = 0;
    randomNumber = generateNumber();
  };

  /*--- Get value on form submit ---*/
  $('form').submit(function(event) {
    event.preventDefault();
    if (!numberGuessed) {
      userChoice = $('#userGuess').val();
      console.log('User guesses '+ userChoice);
    };
  });

  /*--- Generate random number --*/
  function generateNumber(){
    var generatedNumber = Math.floor((Math.random() * 100) + 1);
    console.log("Randon number is " + generatedNumber);

    return generatedNumber;
  };

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


