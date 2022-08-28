const videoData = [
	{
		name : 'Miss Scarlet',
		present: true,
		room: [
			{kitchen: false},
			{ballroom: false},
			{conservatory: false},
			{'dining room': false},
			{'billiard room': false},
			{library: false},
		]
	},
	{
		name : 'Mrs. White',
		present: false,
		room: [
			{kitchen: false},
			{ballroom: false},
			{conservatory: false},
			{'dining room': false},
			{'billiard room': false},
			{library: false},
		]
	},
	{
		name : 'Reverend Green',
		present: true,
		room: [
			{kitchen: false},
			{ballroom: false},
			{conservatory: false},
			{'dining room': false},
			{'billiard room': false},
			{library: false},
		]
	},
	{
		name : 'Rusty',
		present: false,
		room: [
			{kitchen: false},
			{ballroom: false},
			{conservatory: false},
			{'dining room': false},
			{'billiard room': false},
			{library: false},
		]
	},
	{
		name : 'Colonel Mustard',
		present: true,
		room: [
			{kitchen: false},
			{ballroom: false},
			{conservatory: false},
			{'dining room': false},
			{'billiard room': false},
			{library: false},
		]
	},
	{
		name : 'Professor Plum',
		present: true,
		room: [
			{kitchen: false},
			{ballroom: false},
			{conservatory: false},
			{'dining room': false},
			{'billiard room': false},
			{library: false},
		]
	},

]

// jawaban:

let saring = videoData.filter(function(Hadir){
	return Hadir.present == true;
});
console.log(saring);
