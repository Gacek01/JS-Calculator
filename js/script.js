'use strict';
for (var i = 1; i < 16; i++) {
	document.getElementById("button" + i).addEventListener("click", displayValue);
}
document.getElementById("button16").onclick = clearDisplay;
document.getElementById("button17").onclick = evaluateDisplay;

function displayValue() {
	document.getElementById("display").value += this.value;
}

function clearDisplay() {
	document.getElementById("display").value = null;
}

function evaluateDisplay() {
	document.getElementById("display").value = eval(document.getElementById("display").value);
}