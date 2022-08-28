const animals = [
	{name: "Fluffy", species: "cat"},
	{name: "Carlo", species: "dog"},
	{name: "Nemo", species: "fish"},
	{name: "Hammilton", species: "dog"},
	{name: "Dory", species: "fish"},
	{name: "Ursa", species: "cat"},
]

let fish = animals.filter((animal) => animal.species === 'fish')
console.log(fish)

let names = animals.map((animal) => animal.name + " is a " + animal.species)
console.log(names)


//reduce
let orders = [
	{ total: 325 },
	{ total: 512 },
	{ total: 128 },
	{ total: 32 }
]
let total = orders.reduce((total, order) => total + order.total, 0)
console.log(total);