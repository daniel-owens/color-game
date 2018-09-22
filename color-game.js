var numSquares = 6;
var colors = []
var pickedColor;
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
	setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			} 
			if (this.textContent === "Hard") {
				numSquares = 6;
			}
			if (this.textContent === "Insane") {
				numSquares = 12; 
			}
			// this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
			reset();
		})
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {	
		var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;	
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		})
	}
}

function randomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function generateRandomColors(num) {
	var arr = [];
	// repeat num times
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor())
	}
	return arr;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];			
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#d6e8ae";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function() {
	reset();
})

























