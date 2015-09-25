
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
  		$('#count').reset();
  	});

  	/*--- create random number ---*/
  	var number = Math.floor(Math.random() * 100) + 1;

  	/*--- guess button ---*/
  	$("#guessButton").click(function(){
  		var guess = $('#userGuess').val();
  		if (guess == number) {
  			$('#guessList').append($("<li>You've guessed the number!!</li>"));
  		} else if (guess < number) {
  			$('#guessList').append($("<li>You'll need to go higher.</li>"));
  		} else if (guess > number) {
  			$('#guessList').append($("<li>"+"You'll need to go lower."+'</li>'));
  		}
  	});

  	/*--- guess counter ---*/
  	var counter = 0

});


