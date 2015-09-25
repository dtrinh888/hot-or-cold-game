
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
  		if (guess == number) {
  			$('#feedback').text("You've guessed the number!!");
  			$('#guessList').append("<li>"+guess+"</li>");
  		} else if (guess < number) {
  			$('#feedback').text("You'll need to go higher.");
  			$('#guessList').append("<li>"+guess+"</li>");
  		} else if (guess > number) {
  			$('#feedback').text("You'll need to go lower.");
  			$('#guessList').append("<li>"+guess+"</li>");
  		}
  	});

  	/*--- guess counter ---*/
  	var counter = 0;


});


