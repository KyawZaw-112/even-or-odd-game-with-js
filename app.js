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

//function for wrapper screen
scoreBoard.innerHTML = score;

//game functionality
let randomNumber  = Math.floor(Math.random() * 10);
console.log(randomNumber);

function autoGenerateNumber() {
	let randomFunction = randomNumber;
	console.log(randomFunction);
	return randomFunction;
}
console.log(autoGenerateNumber());

const checkEvenOrOdd = () => {
	let checkNumber = randomNumber;
	if (checkNumber % 2 === 0) {
		console.log("even " + checkNumber);
		return "even";
	} else {
		console.log("odd " + checkNumber);
		return "odd";
	}
}

let evenOrOdd = checkEvenOrOdd();








