var input = document.querySelector('.input');
var btnNumbers = document.querySelectorAll('.number');
var btnOperators = document.querySelectorAll('.opperator');
var btnEqual = document.getElementById('equal');
var btnComma = document.getElementById('coma');
var commaFlag = false;

btnComma.addEventListener('click', () => {
	if (commaFlag) {
		input.textContent += ".";
		commaFlag = false;
	}
});

var btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
	{
		input.textContent = "0";
		newExpressionFlag = true
	}
});

var btnDel = document.getElementById('del');
btnDel.addEventListener('click', () => {
	{
		if(input.textContent){
			input.textContent = input.textContent.slice(0,-1);
			newExpressionFlag = false;
			lastOperator = true;
		}
		// if(input.textContent){
		// 	input.value = input.value.substring(0, input.value.length -1);
		// }
	}
});

var newExpressionFlag = true; // Memberi tahu apakah itu ekspresi baru yang dipicu oleh persamaan
// NUMBERS 
for (var i = 0; i < btnNumbers.length; i++) {
	btnNumbers[i].addEventListener('click', function() {
		if (newExpressionFlag === true) {
			input.textContent = "";
			newExpressionFlag = false;
		}
		input.textContent += this.textContent;
		lastOperator = false;
		commaFlag = true;
	});
}
// OPERATORS 
var lastOperator = false;;
for (var i = 0; i < btnOperators.length; i++) {
	btnOperators[i].addEventListener('click', function() {
		newExpressionFlag = false;
		if (lastOperator) {
			input.textContent = input.textContent.slice(0, -3);
		}
		input.textContent += ` ${this.textContent} `;
		lastOperator = true;
	});
}
// FUNGSI HELPER YANG MENGHITUNG ARRAY NILAI
function Calculator() {

	var methods = {
		"+": (a, b) => {
			return ((parseFloat(a) * 1000) + (parseFloat(b)) * 1000) / 1000
		},
		"-": (a, b) => {
			return ((parseFloat(a) * 1000) - (parseFloat(b)) * 1000) / 1000
		},
		"/": (a, b) => {
			return a / b
		},
		"*": (a, b) => {
			return ((parseFloat(a) * 1000) * (parseFloat(b)) * 1000) / 1000000
		},
	}

	this.calculate = function(arrayer) {
		var
		a = +arrayer[0],
		b = +arrayer[2],
		op = arrayer[1];

		if (arrayer.length === 1) {
			return arrayer[0];
		} else if (arrayer.length === 1) {
			return methods[arrayer[1]](arrayer[0], arrayer[0]); // MENGHITUNG SENDIRI CONTOH NILAINYA : STR = 1+5 + ; PENGEMBALIAN (1+ 5) + (1+5 ) = 1sss2
		} else {
			var sum = 0;

		for (var i = 1; i < arrayer.length; i += 2) {
			console.log(i + " I");
			var a = (result === undefined) ? arrayer[i - 1] : result,
			op = arrayer[i],
			b = arrayer[i + 1];
			console.log(`a: ${a} / b: ${b} /op:${op}`);
			var result = methods[op](a, b);
			sum = result;
			console.log(sum);
		}
		return sum;
		}
	}
}

// EQUAL
btnEqual.addEventListener('click', function() {
	var values = input.textContent.split(' ');
	console.log(values);
	var calc = new Calculator();
	var returnment = calc.calculate(values);
	input.textContent = returnment;
	newExpressionFlag = true;
});