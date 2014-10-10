
$(document).ready(function(){
		/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
  	/*--- Variable Declaration---*/
  
  	var numberRandom;
  	var numberGuess;
  	var numberCheck;
  	var counter = 0;
  	var flag = 0;
  	var addText =$('#feedback')

  	/*--- Function Declaration----------------------------*/

  	/*--- Text Change Function---*/
  	var changeText = function(sometext){
  		return addText.text(sometext);
  	};

  	/*--- Append Function---*/

  	function appendGuess(){
  		$('#guessList').append('<li>'+ numberGuess +'</li>');
  	}

  	/*--- New Game Function---*/

  	function newGame(){
  		playTrumpet();
  		$('#count').text(0);
  		counter = 0;
  		flag = 0;
  		randomGenerate();
  		$('#guessList li').remove();
  		changeText("Make Your Guess!");
  	}
  	/*--- Prevent Function---*/
  	function preventSubmit(){
  		$('.button').submit(function(event){
  			event.preventSubmit;
  		});
  	}

  	/*--- Random Number Function---*/
	function randomGenerate(){
		 numberRandom =  Math.floor(Math.random() * (100)) + 1;
	}
	randomGenerate();
	
	/*--- Counter Function---*/
	function countGuess(){
					counter ++;
					$('#count').val(counter).text(counter);

	}
	/*---Clear Form Function--*/
	function clearGuess(){
		$('form').find('input[type=text]').val('');
	}

	/*--- User Input Compare Function---*/

	function checkShowGuess(){
					
					console.log (numberRandom);
					numberGuess = +$("input[name=userGuess]").val();
					numberCheck = Math.abs(numberGuess - numberRandom);

					if (flag === 1) {
						changeText("Start a New Game!");
						preventSubmit();
						playError();
					}

					else if (numberGuess < 1 || numberGuess > 100){
						alert("Enter a number between 1 and 100");
						preventSubmit();
						playError();
					}
										
					else if (numberCheck > 40){
						 changeText("Your Guess is Freezing Cold!");
						 appendGuess();
						 countGuess();
					}
					
					else if (numberCheck > 25){
						changeText("Your Guess is Getting Cold!");
						appendGuess();
						countGuess();
					}
					else if (numberCheck > 15){
						changeText("Your Guess is Getting Warm!");
						appendGuess();
						countGuess();
					}
					else if (numberCheck > 5){
						changeText("Your Guess is Getting Hot!");
						appendGuess();
						countGuess();
					}
					else if (numberCheck > 0){
						changeText("Your Guess is freaking Hot!");
						appendGuess();
						countGuess();
					}
					else if (numberGuess === numberRandom){
						changeText("Yay! You Guessed it!!");
						appendGuess();
						countGuess();
						flag = 1;
						playOvation();
					}
				}

	/*--- Button Actions------------------------------------*/
	/*--- New Game Button Action---*/
	$('.new').click(function(){
  		newGame();
  		clearGuess();
  	});
 	
 	/*--- Guess Button Action---*/
	$(".button").click(function(event){
		event.preventDefault();
		checkShowGuess();
		clearGuess();
				
	});
	/*--- Sound Functions---*/
	 function playOvation(){
	 	$('#ovation-sound')[0].play();
	 }

	 function playError(){
	 	$('#error-sound')[0].play();
	 }
	 function playTrumpet(){
	 	$('#trumpet-sound')[0].play();
	 }
});



	
  		
  	
