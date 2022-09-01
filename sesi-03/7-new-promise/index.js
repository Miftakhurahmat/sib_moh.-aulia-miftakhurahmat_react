setTimeout(() => {
	console.log("Tick");
}, 1000);

const doSomething = function () {
	return new Promise((resolve, reject) => {
		TODO
	})
}

let doIt = doSomething()

doIt.then(response => {

})

doIt.catch(error => {

})

const setTimeoutPromise = (duration) =>
	new Promise((resolve, reject) => {
		setTimeout(resolve, reject);
	});

setTimeoutPromise(1000).then(() => console.log("tick"));