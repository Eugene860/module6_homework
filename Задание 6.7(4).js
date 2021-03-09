function twoNumbers(a, b) {
	for (let i = a; i <= b; i++) {
		console.log(i);
	}
}
setInterval(twoNumbers, 1000, 5, 15)