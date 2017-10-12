
//HIGH LEVEL PSEUDOCODE//////////////////////////////////////////////////////
//10 questions
//Each question has 1 correct answer and 4 wrong answers

//Each question will be on screen for n seconds with a visible counter
//after n seconds the card will flip to reveal the correct answer (indicate if user was right or wrong)
//after n seconds the card will then flip again, revealing a new question
/////////////////////////////////////////////////////////////////////////


//Questions
//We will achieve this with objects and arrays
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
	question: "What Book Did Desmond Save to Be The Last He Would Ever Read?",
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




function buildQuestion(i){
	$(".question").html(triviaList[i].question);

		console.log(`turn: ${i}`);

		for (key in triviaList[i].answers){
			$(".front").append(`<button class='button' data-choice_id='${key}'><span class='answer'>${triviaList[i].answers[key]}</span></button>`);

		}


		$(".button").on("click", function(){

			$(this).addClass(`yes`);

			if($(this).hasClass(`yes`)){

				if($(this).data("choice_id") === "correct"){
					console.log("YAYA!!!!");
					$(".result").html("Correct!");
					$(".answerBack").html("The answer was " + triviaList[i].answers.correct + "!");
					// $(".card").toggleClass("flip");
					

				}

				else{
					console.log("NONONONONON!");
					$(".result").html("Wrong!");
					console.log(triviaList[i].answers.correct);
					$(".answerBack").html("The answer was " + triviaList[i].answers.correct + "!");
					// $(".card").toggleClass("flip");
				}

			}

			else if (!($(this).hasClass(`yes`))){
				$(".answerBack").html(`You Did not Select and Answer! 
				The answer was ${triviaList[i].answers.correct}!`);
			}
		});



		// setTimeout(function(){$(".card").toggleClass("flip");}, 1000*3);
};


function flip(i){
	// console.log(`{======Begin Flip====}`);

	$(".card").toggleClass("flip");
	setTimeout(function() {flipBack(i);}, 1000*3);
	// console.log(`{======End Flip====}`);

}

function flipBack(i){
	// console.log(`{======Begin FlipBack====}`);

	$(".question").html("");
	$(".button").remove();
	$(".card").toggleClass("flip");
	$(".answerBack").html("");

	if(i>0){
		playGame(i-1);
	}

	else{
		console.log(`We're done`);
		$(".front").html(`Thanks for playing!`);

	}
	// console.log(`{======End FlipBack====}`);

}


function playGame(i){
	console.log(`PlayGame: ${i}`);
	buildQuestion(i);
	setTimeout(function() {flip(i);}, 1000*3);
	
	// i++;
}

playGame(triviaList.length-1);
























// for (i=0; i<triviaList.length; i++){
// 	console.log(`{======Begin Loop====}`);
// 	playGame(i);
// 	console.log(`{======End Loop=====}`);
// }


// for (var i=0;i<=10;i++) {
//    (function(ind) {
//        setTimeout(function(){console.log((ind + 1)*1000, ':', ind);}, 1000 * (ind+1) );
//    })(i);
// }




//Should run as follows:
//Play game 0
//build question 0
//flip 0
//flipBack 0
//Play game 1
//build question 1
//etc. 


