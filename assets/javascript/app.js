
//HIGH LEVEL PSEUDOCODE//////////////////////////////////////////////////////
//10 questions
//Each question has 1 correct answer and 4 wrong answers

//Each question will be on screen for n seconds with a visible counter
//after n seconds the card will flip to reveal the correct answer (indicate if user was right or wrong)
//after n seconds the card will then flip again, revealing a new question
/////////////////////////////////////////////////////////////////////////


//Questions
//We will achieve this with objects and arrays

// Variable Declarations====================================================================
	triviaList = [{

		question: "What City Did Oceanic Flight 815 Depart From?",
		answers: {
			correct: "Sydney, Autralia",
			answer2: "Melbourne, Australia",
			answer3: "Los Angeles, California",
			answer4: "Honolulu, Hawaii"
			}
		},

		{
		question: "What Are The Numbers?",
		answers: {
			correct: "4, 8, 15, 16, 23, 42",
			answer2: "815",
			answer3: "77",
			answer4: "09 24 2005"
			}
		},

		{
		question: "Where is Sayid From?",
		answers: {
			correct: "Iraq",
			answer2: "Iran",
			answer3: "Egypt",
			answer4: "Great Britain"
			}
		},

		{
		question: "What Book Did Desmond Save to Be His Last?",
		answers: {
			correct: "Our Mutual Friend",
			answer2: "Catch 22",
			answer3: "One Flew Over The Cuckoos Nest",
			answer4: "Watership Down"
			}
		},

		{
		question: "Which Season Introduced the Flash Forward?",
		answers: {
			correct: "Season 3",
			answer2: "Season 5",
			answer3: "Season 1",
			answer4: "Season 6"
			}
		},

		{
		question: "When Did Penny Get Her Call From Desmond?",
		answers: {
			correct: "December 25, 1996",
			answer2: "December 25, 2004",
			answer3: "September 24, 2004",
			answer4: "August 15, 1973"
			}
		},

		{
		question: "What Was The Name Of The Dog?",
		answers: {
			correct: "Vincent",
			answer2: "Fido",
			answer3: "Jack",
			answer4: "Nadia"
			}
		},

		{
		question: "Who Was The First Major Character to Die? ",
		answers: {
			correct: "Boone Carlyle",
			answer2: "Shannon Rutherford",
			answer3: "Charlie Pace",
			answer4: "Miles Straum"
			}
		},

		{
		question: "Who Was Paralyzed Before They Got to the Island",
		answers: {
			correct: "John Locke",
			answer2: "Ben Linus",
			answer3: "Juliet Burke",
			answer4: "Daniel Faraday"
			}
		},

		{
		question: "What Station Was Desmond In?",
		answers: {
			correct: "The Swan",
			answer2: "The Pearl",
			answer3: "The Hydra",
			answer4: "The Looking Glass"
			}
		},
	];

	var counter=10;
	// var flipTimer;
	// var flipBackTimer;
//===========================================================================================



//Function Declarations=======================================================================================


	//Randmoize the order of the questions
	function shuffle(a) {
	    	for (let i = a.length; i; i--) {
	       		let j = Math.floor(Math.random() * i);
	       		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	    	}
	}

	//Timer for the question
	function timer(counter){
			var countdown = setInterval(function(){
			$(".timer").html(counter);
			 console.log(counter); 
			 counter--;
			if(counter === 0){clearInterval(countdown)};
			}, 1000*1);
	}

	//Put question on screen
	function buildQuestion(i){

		counter = 10;

		timer(counter);
		
		$(".timerBox").css("visibility", "visible");

		$(".question").html(triviaList[i].question);


			for (key in triviaList[i].answers){

				$(".front").append(`<button class='button' data-clicked='no' data-choice_id='${key}'><span class='answer'>${triviaList[i].answers[key]}</span></button>`);
			}

			var isClicked = $(".button").data("clicked");


			if(isClicked == 'no'){
				$(".answerBack").html("You did not pick an answer!");
			}

			$(".button").on("click", function(){


				if($(this).data("choice_id") === "correct"){					
					$(".result").html("Correct!");
					$(".answerBack").html("The answer was " + triviaList[i].answers.correct + "!");
				}

				else{
					$(".result").html("Wrong!");
					$(".answerBack").html("The answer was " + triviaList[i].answers.correct + "!");
				}

				// $(".card").toggleClass("flip");					

			});	

		// flipTimer(i);

		setTimeout(function() {flip(i);}, 1000*11);
	}

	//Flip to the answer side
	function flip(i){
		$(".timerBox").css("visibility", "hidden");
		$(".card").toggleClass("flip");

		setTimeout(function() {flipBack(i);}, 1000*3);
		// flipBackTimer(i);
	}

	//Flip to the queation side;
	function flipBack(i){

		$(".question").html("");
		$(".button").remove();
		$(".card").toggleClass("flip");
		$(".answerBack").html("");
		$(".timer").html("");
		
		if(i>0){
			buildQuestion(i-1);
		}

		else{
			$(".question").html("Thanks for Playing!");
		}

	}


	//The following does not work, for no apparent reason it makes the code cry=================

		// function flipTimer(i){

		// 	flipTimer = setTimeout(function() {flip(i);}, 1000*11);
		// }

		// function flipBackTimer(i){

		// 	flipBackTimer = setTimeout(function() {flipBack(i);}, 1000*3);
		// }

	//==========================================================================================

//==================================================================================================================


shuffle(triviaList);

buildQuestion(triviaList.length-1);























