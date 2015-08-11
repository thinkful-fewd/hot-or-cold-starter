
$(document).ready(function(){

	//variables
	var secretNumber = 0;
	var userGuess = 0;
	var guessCount = 0;
	var finish = false;


	//random number generator
	function secretNumberGenerator() {
		secretNumber = (Math.floor(Math.random()*100));
		console.log("Secret number = " + secretNumber);
	}

	secretNumberGenerator();


	//get user input

	//validate user input is number between 1 and 100 

	//evaluation user input

	//feedback to user




	//number of attempts

	//list of previously entered numbers




	//new game function -- resets everything, gets a new random number
	function newGame() {
		guessCount = 0;
		finish = false;
		$('#userGuess').val(); //not sure what this is about
		$('#count').text(guessCount); //still don't understand the $ v variable name
		$('#guessList li').remove(); // is this just to reset it to 0?
		secretNumber = (Math.floor(Math.random()*100));
		console.log("Secret number = " + secretNumber);
		setFeeback("Make your guess!");	//still don't understand all these different ways of formatting what seem like the same thing
	}


	//start new game -- user action that calls the new game function
	$('.new').click(function() {
		newGame();
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
