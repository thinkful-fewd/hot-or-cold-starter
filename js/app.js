var answer = 0;
var guessCount = 0;

$(document).ready(function(){
	//var userGuess = 0;
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Input Guess ---*/
  	$('#guessButton').click(function() {
  		document.getElementById('feedback').innerHTML = guessCheck($('#userGuess').val());
  		document.getElementById('count').innerHTML = guessCount;
  	});
  	$('.new').click(function() {
  		location.reload();
  	});
});

var newGame = function () {
	answer = randNum(100,1);
	guessCount = 0;
}

var randNum = function (range, start) {
	return Math.floor(Math.random()*range)+start
}

var guessCheck = function (userGuess) {
	  	if (userGuess == NaN) {
			alert("Please enter an integer between 1 and 100.");
			return "Make your Guess!"
		}
		else if (userGuess % 1 != 0) {
			alert("Please enter an integer between 1 and 100.");	
			return "Make your Guess!"
		}
		else if (userGuess < 0 || userGuess>100) {
			alert("Please enter an integer between 1 and 100.");
			return "Make your Guess!"	
		}
		else {
			guessCount++;
			$('#guessList').append("<ul>"+userGuess+"</ul>");
			if (userGuess == answer) {
				return "You are correct!";
			}
			else if (Math.abs(userGuess - answer) > 50) {
				return "Ice cold!";
			}
			else if (Math.abs(userGuess - answer) > 30) {
				return "Cold!";
			}
			else if (Math.abs(userGuess - answer) > 10) {
				return "Hot!";
			}
			else if (Math.abs(userGuess - answer) >= 1) {
				return "Very hot!";
			}
		}
}
