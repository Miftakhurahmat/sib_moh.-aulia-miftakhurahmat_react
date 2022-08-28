setInterval(() => {
	console.log("tick")
}, 1000);

const printTick = () => {
	console.log("tick")
}
setInterval(printTick, 1000)