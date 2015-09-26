$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- start new game ---*/
  	$(".new").click(function(){
  		$('#feedback').text("Make your Guess!");
  		userGuess();
  		$('#count').text(counter=0);
  		$('#guessList').empty();
  		number = randNum(); 

  	});

  	/*--- empty #userGuess ---*/

  	function userGuess() {
  		$('#userGuess').val("");
  	}

  	/*--- create random number ---*/
  	var number;  

  	function randNum(){
  		return Math.floor(Math.random() * 100) + 1;
  	}	

  	 number = randNum();

  	function guessCount(){
		$('#guessList').append("<li>"+guess+"</li>"); 
	}
	
	/*--- guess counter ---*/
  	var counter = 0;

  	/*--- guess button ---*/
  	$("#guessButton").click(function(e) {
  		e.preventDefault();
  		counter++;
  		$('#count').text(counter);
  		var guess = $('#userGuess').val();
  		var distance = Math.abs(number-guess); 		

  		if (guess == number) {
  			$('#feedback').text("You've guessed the number!!");
  		} else if (distance > 50) {
  			$('#feedback').text("Ice Cold").css({"background-color": "blue", "color": "white"});
  		} else if (distance <= 50 && distance >= 30) {
  			$('#feedback').text("Cold").css({"background-color": "#A5F2F3", "color": "blue"});
  		} else if (distance <= 30 && distance >= 20) {
  			$('#feedback').text("Warm").css({"background-color": "yellow", "color": "blue"});
  		} else if (distance <= 20 && distance >= 10) {
  			$('#feedback').text("Hot").css({"background-color": "red", "color": "yellow"});
  		} else if (distance <= 10 && distance >= 1) {
  			$('#feedback').text("Very Hot").css({"background-color": "#B22222", "color": "yellow"});	
  		}

  		userGuess(); 
  		guessCount();

  	});
});