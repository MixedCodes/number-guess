'use strict';

const answer = Math.trunc(Math.random() * 20) + 1;
const labelAnswer = document.querySelector(".number")
let score = 20;
const labelScore = document.querySelector(".score");
const again = document.querySelector(".again");


const message = document.querySelector(".message");
const check = document.querySelector(".check");
const input = document.querySelector(".guess")

check.addEventListener("click", function() {
	const guess = Number(input.value);
	console.log(guess);
	console.log("answer", answer);

	if (!guess) {
		message.textContent = "Please enter a number";
	} else if (guess === answer) {
		message.textContent = `🎉 That's the correct Number! You got ${score} points!`;
		document.querySelector("body").style.backgroundColor = "#236cd7";
		labelAnswer.textContent = answer;
	} 

	else if (guess > answer) {
		if (score > 0) {
			score--;
			labelScore.textContent = score;
			message.textContent = "📈 Too high";
		} else {
			message.textContent = `💥 You lost the game. The answer was ${answer}`
			document.querySelector("body").style.backgroundColor = "#222";
			labelAnswer.textContent = answer;
		}		
	} 

	else if (guess < answer) {
		if (score > 0) {
			score--;
			labelScore.textContent = score;			
			message.textContent = "📉 Too low";
		} else {
			message.textContent = `💥 You lost the game. The answer was ${answer}`
			document.querySelector("body").style.backgroundColor = "#222";
			labelAnswer.textContent = answer;
		}
	}
})

again.addEventListener('click', function () {
	location.reload();
})