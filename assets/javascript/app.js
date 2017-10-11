
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

	question: "Question 1",
	answers: {
		correct: "Clark Kent",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 2",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 3",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "QUAAAAACKK",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 4",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 5",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 6",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 7",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 8",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 9",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

	{
	question: "Question 10",
	answers: {
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},
];




function buildQuestion(i){
	$(".question").html(triviaList[i].question);

		console.log(`turn: ${i}`);

		for (key in triviaList[i].answers){
			$(".front").append(`<button class="button" data-choice_id="${key}"><span class='answer'>${triviaList[i].answers[key]}</span></button>"`);

		}


		$(".button").on("click", function(){

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
		});

		// setTimeout(function(){$(".card").toggleClass("flip");}, 1000*3);
};




function flip(){
	console.log(`{======Begin Flip====}`);

	console.log(`flip: ${i}`);
	$(".card").toggleClass("flip");
	setTimeout(flipBack, 1000*5);
	console.log(`{======End Flip====}`);

}

function flipBack(){
	console.log(`{======Begin FlipBack====}`);

	console.log(`flipBack: ${i}`);
	$(".front").html("");
	$(".card").toggleClass("flip");	
	console.log(`{======End FlipBack====}`);

}





function playGame(i){
	console.log(`PlayGame: ${i}`);
	buildQuestion(i);
	setTimeout(flip, 1000*5);
}

for (i=0; i<triviaList.length; i++){
	console.log(`{======Begin Loop====}`);
	playGame(i);
	console.log(`{======End Loop=====}`);
}



//Should run as follows:
//Play game 0
//build question 0
//flip 0
//flipBack 0
//Play game 1
//build question 1
//etc. 


