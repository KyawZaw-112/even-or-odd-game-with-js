//for wrapper screen
const startBtn = document.querySelector("#startBtn");
const wrapperScrren = document.querySelector(".wrapper");
const exitBtn = document.querySelector("#exitBtn");
const mainscreen = document.querySelector(".main-screen");

//for game

let number = 0;
let score = 0;

//DOM elements

const evenBtn = document.querySelector("#evenBtn");
const oddBtn = document.querySelector("#oddBtn");
const scoreBoard = document.querySelector("#userScore");
let numberStart = document.querySelector("#number");
// let ramNum = Math.floor(Math.random() *10);

//function for wrapper screen
scoreBoard.innerHTML = score;

numberStart.textContent = "Click Any Button !!!";
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
            exit()
		}
	});
});

function start() {
	ramNum = Math.floor(Math.random() * 100);
	numberStart.innerText = ramNum;
	console.log(ramNum);
	return ramNum;
}

function ev() {
	return "even";
}

function od() {
	return "odd";
}

evenBtn.addEventListener("click", function () {
	let even = ev();
	start();
	if (check() === even) {
		score++;
		scoreBoard.innerText = score;
		console.log("true it's even");
	} else {
		score--;
		scoreBoard.innerText = score;
		console.log("false it's odd");
	}
});

oddBtn.addEventListener("click", function () {
	let odd = od();
	start();
	if (check() === odd) {
		score++;
		scoreBoard.innerText = score;
		console.log("true it's odd");
	} else {
		score--;
		scoreBoard.innerText = score;
		console.log("false it's even");
	}
});

function check() {
	let startnumber = numberStart.innerText;
	if (startnumber % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}

function exit() {
	score = 0;
	scoreBoard.innerText = score;
	numberStart.textContent = "Click Any Button !!!";
    wrapperScrren.style.display = "flex";
	mainscreen.style.display = "none";
}
