function isPrime(num) {
	if (num > 1000) {
		console.log("данные неверны")
	}
	let result = true;
	for (let i = 2; i < num; i++)
		if (num % i === 0) {
			result = false
		}
		if (result == true) {
			console.log("число простое")
		}
		else {
			console.log("число не простое")
		}
}
isPrime(907)