function check(){
	var question_1 = document.quiz.question_1.value;
	var question_2 = document.quiz.question_2.value;
	var question_3 = document.quiz.question_3.value;
	var question_4 = document.quiz.question_4.value;
	var question_5 = document.quiz.question_5.value;
	var question_6 = document.quiz.question_6.value;
	var question_7 = document.quiz.question_7.value;
	var question_8 = document.quiz.question_8.value;
	var question_9 = document.quiz.question_9.value;
	var correct = 0;


	//question one possibilities
	if (question_1 == "Rarely") {
		correct++;
	}
	if (question_1 == "Sometimes") {
		correct++; correct++;
	}
	if (question_1 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_1 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question two possibilities
	if (question_2 == "Rarely") {
		correct++;
	}
	if (question_2 == "Sometimes") {
		correct++; correct++;
	}
	if (question_2 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_2 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question three possibilities
	if (question_3 == "Rarely") {
		correct++;
	}
	if (question_3 == "Sometimes") {
		correct++; correct++;
	}
	if (question_3 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_3 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question four possibilities
	if (question_4 == "Rarely") {
		correct++;
	}
	if (question_4 == "Sometimes") {
		correct++; correct++;
	}
	if (question_4 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_4 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question five possibilities
	if (question_5 == "Rarely") {
		correct++;
	}
	if (question_5 == "Sometimes") {
		correct++; correct++;
	}
	if (question_5 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_5 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question six possibilities
	if (question_6 == "Rarely") {
		correct++;
	}
	if (question_6 == "Sometimes") {
		correct++; correct++;
	}
	if (question_6 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_6 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question seven possibilities
	if (question_7 == "Rarely") {
		correct++;
	}
	if (question_7 == "Sometimes") {
		correct++; correct++;
	}
	if (question_7 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_7 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question eight possibilities
	if (question_8 == "Rarely") {
		correct++;
	}
	if (question_8 == "Sometimes") {
		correct++; correct++;
	}
	if (question_8 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_8 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	//question nine possibilities
	if (question_9 == "Rarely") {
		correct++;
	}
	if (question_9 == "Sometimes") {
		correct++; correct++;
	}
	if (question_9 == "Often") {
		correct++; correct++; correct++;
	}
	if (question_9 == "Very Often") {
		correct++; correct++; correct++; correct++;
	}

	document.getElementById("after_submit").style.visibility="visible";


	if(correct<15){
		document.getElementById("number_correct").innerHTML = "You are ADHD unlikely.";

	}

	if(14<correct && correct<22){
		document.getElementById("number_correct").innerHTML = "You are ADHD possible.";

	}

	if(21<correct){
		document.getElementById("number_correct").innerHTML = "You are ADHD likely.";

	}

	
}