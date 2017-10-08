
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
		correct: "BLAH BLAH",
		answer2: "BLOR BLOR",
		answer3: "BLARG BLARG",
		answer4: "BLoOOOP"
		}
	},

 // question: "Question 2",
	// answers: [{
	// 	correct: "BLAH BLAH",
	// 	answer2: "BLOR BLOR",
	// 	answer3: "BLARG BLARG"
	// 	}]
	// }, 

]



			
			
// for key in triviaList[i].answers



//Put the question in the title
$(".question").html(triviaList[0].question);


//creates the answer buttons
for (i=0; i< triviaList.length; i++){
			// console.log("hellow world parent");

	for (key in triviaList[i].answers){
		$(".front").append("<button class='button' data-choice_id=" + key + "><span class='answer'  >" + triviaList[i].answers[key] + "</span></button>");
		// $(".answers").attr("data-answer_id", key);
	}

}


$(".button").on("click", function(){

	// console.log(this);

	if($(this).data("choice_id") === "correct"){
		console.log("YAYA!!!!");
		$(".card").toggleClass("flip");
	}

	else{
		console.log("NONONONONON!")
	}
});















