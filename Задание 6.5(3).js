function numb(a) {
	return function(b) {
		return (a + b);
	}
}
const numA = numb(3);
const sumNum = numA(4);
console.log(sumNum)