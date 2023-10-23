//for wrapper screen
const startBtn = document.querySelector("#startBtn");
const wrapperScrren = document.querySelector(".wrapper");
const exitBtn = document.querySelector("#exitBtn");
const mainscreen = document.querySelector(".main-screen");
const guideBtn = document.querySelector("#guideBtn");

//DOM elements

const evenBtn = document.querySelector("#evenBtn");
const oddBtn = document.querySelector("#oddBtn");
const scoreBoard = document.querySelector("#userScore");
let numberStart = document.querySelector("#number");

startBtn.addEventListener("click", () => {
	wrapperScrren.style.display = "none";
	mainscreen.style.display = "flex";
});

exitBtn.addEventListener("click", () => {
	Swal.fire({
		title: "Are you sure?",
		text: "Just Play It's a game, Bro!!!",
		icon: "question",
		showCancelButton: true,
		confirmButtonColor: "#f00",
		cancelButtonColor: "#3085d6",
		confirmButtonText: "Yes, I exit!",
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire("EXIT!", "Don't leave me alone.", "success");
			exit();
		}
	});
});

function exit() {
	score = 0;
	scoreBoard.innerText = score;
	wrapperScrren.style.display = "flex";
	mainscreen.style.display = "none";
}

guideBtn.addEventListener("click", function () {
	Swal.fire({
		title: "Guide",
		text: "The game is started, you see the number and guess even or odd.If your choice is right, you get one point but it's wrong , lose one point",
		textOne: "1. You guess next number is even or odd",
		showClass: {
			popup: "animate__animated animate__bounceInDown",
		},
		hideClass: {
			popup: "animate__animated animate__bounceOutUp",
		},
	});
});

//for game
let number = 0;
let score = 0;
const even = "even";
const odd = "odd";

//function for wrapper screen
scoreBoard.textContent = score;

//game functionality
let randomNumber = Math.floor(Math.random() * 1000);
numberStart.textContent = randomNumber;

function autoGenerateNumber() {
	randomNumber = Math.floor(Math.random() * 1000);
	return randomNumber;
}

evenBtn.addEventListener("click", function () {
	if (randomNumber % 2 === 0) {
		score++;
		scoreBoard.innerText = score;
		randomNumber = Math.floor(Math.random() * 1000)
		numberStart.textContent = `${randomNumber}`
	} else {
		score--;
		scoreBoard.innerText = score;
		randomNumber = Math.floor(Math.random() * 1000)
		numberStart.textContent = `${randomNumber}`
	}

});

oddBtn.addEventListener("click", function () {
	if (randomNumber % 2 !== 0) {
		score++;
		scoreBoard.innerText = score;
		randomNumber = Math.floor(Math.random() * 1000)
		numberStart.textContent = `${randomNumber}`
	} else {
		score--;
		scoreBoard.innerText = score;
		randomNumber = Math.floor(Math.random() * 1000)
		numberStart.textContent = `${randomNumber}`
	}

});


//Game over functionality

//point increasement indicator icon and decreasement indicator icon

