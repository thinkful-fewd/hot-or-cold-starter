
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(500);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(500);
  	});

    //prevent page reload
    $('.guessForm').submit(function(e){
e.preventDefault();
        return false;
    });
    //Choose random number 1-100 newGame function
    var randomNum = Math.floor((Math.random() * 100) + 1);
    console.log(randomNum);

    //Accept guesses from input (click and Enter), log answers in ul#guessList, increment guess count
    $('#guessButton').click(function() {
        var userGuess = $('#userGuess').val();
        $('#guessList').prepend('<li>' + userGuess + '</li>');
        if (userGuess - randomNum == 0) {
            $('#feedback').remove();
            $('#feedback').append('Yes! You Won!'); //replace
        }
        else if (Math.abs(userGuess - randomNum) <= 5) {
            alert("Lava Hot!");
        }
        else if (Math.abs(userGuess - randomNum) <= 10) {
            alert("Hot!");
        }
        else if (Math.abs(userGuess - randomNum) <= 25) {
            alert("Cold :(");
        }
        else {
            alert("Antarctica, baby!");
        }
        //return ('.text').val("");
    });

    //Define hot/cold ranges & declare win feedback prints to div#feedback


    //Handle string and decimal inputs (parseInt) - inside previous function?

    //Reset game


});


