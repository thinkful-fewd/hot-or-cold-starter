
$(document).ready(function(){

    /*--variables--*/
	var secretNumber = 0;
	var userGuess = 0;
	var guessCount = 0;
	var finish = false;


	/*--random number generator--*/
	function secretNumberGenerator() {
		secretNumber = (Math.floor(Math.random()*100));
		console.log("Secret number = " + secretNumber);
	}

	secretNumberGenerator();


	/*--get user input--*/
	$('form').submit(function(event) {
		event.preventDefault();
		if(!finish) {
			userGuess = $('#userGuess').val();
			checkInput();
		}
		else {
			setFeedback("You already won! Start a new game.");
		}
	});

	/*--validate user input--*/
	function checkInput() {
	//	if(isNaN(userGuess)) {
	//		alert("Please enter a number from 1-100!");
	//	}
	//	else if(userGuess === " ") {
	//		alert("Well...you still have to input a number");
	//	}
	//	else if(userGuess < 0 || >100) {
	//		alert("The number has to be between 1 and 100");
	//	}
	//	else {
	//		comparisonAmount(); //i may not need this, seems too complicated
			console.log("User guess = " + userGuess);
			$('#userGuess').val(''); //what is this doing? what is val?
			guessCount++; //what is this doing? adding 1? noting number of guesses i think
			setCount(guessCount); //really don't understand the formatting here
			$('ul#guessList').append("<li>" + userGuess + "</li>");
	//	}
	} 

	/*--evaluation user input, he used three functions: negativeAmount, positiveAmount and comparisonAmount--*/




	/*--feedback to user--*/
	function setFeedback(feedback) { //what does (feedback) mean here?
		$("#feedback").text(feedback);
	}




	/*--number of attempts--*/
	function setCount(count) { // not sure what (count) is doing here...? is it an established element like "remove" or did the developer define it?
		$('#count').text(guessCount); //don't understand wen to use this format v. innerHTML = guessCount
	}
	/*--list of previously entered numbers (this is handled by checkInput function currently--*/


	/*--new game function--*/
	function newGame() {
		guessCount = 0;
		finish = false;
		$('#userGuess').val(); //not sure what this is about
		$('#count').text(guessCount); //still don't understand the $ v variable name
		$('#guessList li').remove(); // is this just to reset it to 0?
		secretNumber = (Math.floor(Math.random()*100));
		console.log("New secret number = " + secretNumber);
		setFeedback("Make your guess!");	//still don't understand all these different ways of formatting what seem like the same thing
	}
	/*--start new game, calls the function and runs it--*/
	$('.new').click(function() {
		newGame();
	});

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$(".close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
