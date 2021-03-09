const simpleNumb = (x, n) => {
	let resultX = true;
	for (let i = 2; i < x; i++)
		if (x % i === 0) {
			resultX = false
		}
	let resultN = true;
	for (let i = 2; i < n; i++)
		if (n % i === 0) {
				resultN = false
	}
			if (resultX == true && resultN == true) {
				const multiplication = Math.pow(x, n);
				console.log(multiplication);
			}
			else {
				console.log("Введите простые числа")
			}
}
simpleNumb(3, 5)