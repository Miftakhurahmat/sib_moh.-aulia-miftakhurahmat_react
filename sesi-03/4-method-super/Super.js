class Person {
	constructor (name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends Person{
	constructor (name, title) {
		super(name);
		this._title = title;
	}
	doWork() {
		return this._name + " is working";
	}
	getTitle() {
		return this._name + " is a " + this._title;
	}
}
let scott = new Employee("Scott Moss", "Student");
console.log(scott.getName());
console.log(scott.doWork());
console.log(scott.getTitle());

// const rendy = new Person("Rendy Augusto");
// console.log(rendy.doWork());