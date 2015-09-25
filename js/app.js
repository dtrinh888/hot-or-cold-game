
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
  		$('#userGuess').val("");
  		$('#count').text(counter=0);
  		$('#guessList').empty();
  		randNum();
  	});

  	/*--- create random number ---*/
  	var number; 

  	function randNum(){
  		number = Math.floor(Math.random() * 100) + 1;
  	}

  	randNum();

  	/*--- guess button ---*/
  	$("#guessButton").click(function(e) {
  		e.preventDefault();
  		counter++;
  		$('#count').text(counter);
  		var guess = $('#userGuess').val();
  		var distance = Math.abs(number-guess);
  		
  		function guessCount(){
  			$('#guessList').append("<li>"+guess+"</li>"); 
  		}

  		if (guess == number) {
  			$('#feedback').text("You've guessed the number!!");
  			guessCount();
  		} else if (distance > 50) {
  			$('#feedback').text("Ice Cold");
  			guessCount();
  		} else if  (distance <= 50 && distance >= 30) {
  			$('#feedback').text("Cold");
  			guessCount();
  		} else if (distance <= 30 && distance >= 20) {
  			$('#feedback').text("Warm");
  			guessCount();
  		} else if (distance <= 20 && distance >= 10) {
  			$('#feedback').text("Hot");
  			guessCount();
  		} else if (distance <= 10 && distance >= 1) {
  			$('#feedback').text("Very Hot");
  			guessCount();
  		} 
  	});

  	/*--- guess counter ---*/
  	var counter = 0;


});


