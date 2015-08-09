
$(document).ready(function(){

	//variables
	var secretNumber = 0;


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




	//new game function

	//start new game

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
