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

// startBtn.addEventListener("click", () => {
// 	wrapperScrren.style.display = "none";
// 	mainscreen.style.display = "flex";
// });

// exitBtn.addEventListener("click", () => {
// 	Swal.fire({
// 		title: "Are you sure?",
// 		text: "Just Play It's a game, Bro!!!",
// 		icon: "question",
// 		showCancelButton: true,
// 		confirmButtonColor: "#f00",
// 		cancelButtonColor: "#3085d6",
// 		confirmButtonText: "Yes, I exit!",
// 	}).then((result) => {
// 		if (result.isConfirmed) {
// 			Swal.fire("EXIT!", "Don't leave me alone.", "success");
// 			exit();
// 		}
// 	});
// });

function exit() {
	score = 0;
	scoreBoard.innerText = score;
	numberStart.textContent = start();
	wrapperScrren.style.display = "flex";
	mainscreen.style.display = "none";
}

guideBtn.addEventListener("click", function () {
	Swal.fire({
		title: "Guide",
		text: "The game start You can see the number but you can guess first the number.You guess next number is even or odd. If you can guess next number is right then you get one point but if you wrong , you lose from your original points",
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
let randomNumber = Math.floor(Math.random() * 10);

function autoGenerateNumber() {
	randomNumber = Math.floor(Math.random() * 10);
	console.log("autoGenerateNumber " + randomNumber);
	return randomNumber;
}

numberStart.textContent = autoGenerateNumber();

let evenChecked = randomNumber;
evenBtn.addEventListener("click", function () {
	if (evenChecked % 2 === 0) {
		score++;
		scoreBoard.innerText = score;
		console.log("hello");
	} else {
		score--;
		scoreBoard.innerText = score;
		console.log("ball");
	}
});

oddBtn.addEventListener("click", function () {
	if (evenChecked % 2 !== 0) {
		score++;
		scoreBoard.innerText = score;
	} else {
		score--;
		scoreBoard.innerText = score;
	}
});

// 	let checkNumber = randomNumber;
// 	console.log("check number "+checkNumber);
// const checkEvenOrOdd = () => {
// 	if (checkNumber % 2 === 0) {
// 		console.log("even " + checkNumber);
// 		return "even";
// 	} else {
// 		console.log("odd " + checkNumber);
// 		return "odd";
// 	}
// }

// console.log("final check "+checkEvenOrOdd());
// let checked  = checkEvenOrOdd();
// console.log(checked);
