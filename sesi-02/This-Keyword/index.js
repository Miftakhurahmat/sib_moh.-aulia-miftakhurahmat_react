//this Keyword

function changeColor() {
	this.document.body.style.backgroundColor = '#bada55a'
	//this === window\
}

$('.button').click((e, t) => {
	this.style.backgroundColor = 'papayawhip'
	// this == button(s)\
});

let counter = {
	val: 0,
	increment: function () {
		this.val += 1
	}
}


//management this keyword
function Person() {
	this.age = 0;

	setInterval(function() {
		this.age++;
		console.log(this.age)
	}, 1000);
}

// const p = new Person();

function Person() {
	this.age = 0;

	const that = this
	setInterval(function() {
		this.age++;
		console.log(this.age)
	}.bind(this), 1000);
}

// const p = new Person();

function Person() {
	this.age = 0;

	setInterval(function() {
		this.age++;
		console.log(this.age)
	}.bind(this), 1000);
}

// const p = new Person();

function Person() {
	this.age = 0;

	setInterval(() => {
		this.age++;
		console.log(this.age)
	}, 1000);
}

const p = new Person();