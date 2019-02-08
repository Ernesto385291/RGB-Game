var squaresNum = 6;
var colors = generateRandomColors(squaresNum);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	squaresNum = 3;
	colors = generateRandomColors(squaresNum);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	squaresNum = 6;
	colors = generateRandomColors(squaresNum);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
			h1.style.backgroundColor = "steelblue";
			message.textContent = "";
	}
});

reset.addEventListener("click", function(){
	colors = generateRandomColors(squaresNum);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
}
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Se agregan colores iniciales a los cuadrados.
	squares[i].style.backgroundColor = colors[i];
	//Se agregan los click listeners a los cuadrados.
	squares[i].addEventListener("click", function(){
	//Se crea una nueva variable donde se selecciona el color escogido para agregarlo a la funcion.
	var clickedColor = this.style.backgroundColor;
	//Compara los colores con el seleccionado.
	if (this.style.backgroundColor === pickedColor){
		message.textContent = "Perfecto!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
}
	else{
		this.style.backgroundColor = "#232323";
		message.textContent = "Fallaste";
}	
});
}

function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var Random = Math.floor(Math.random() * colors.length);
	return colors[Random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}