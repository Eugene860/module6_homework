let value = prompt ("Введите значение: ");
let valueNumber = + value;
function valueType() {
	typeof valueNumber
}
valueType();
function oddEven() {
	if (value == "NaN") {
		console.log("NaN не является числом")
	}
	else if (value !== "NaN" && valueNumber % 2 == false) {
		console.log("чётное")
	}
	else if (value !== "NaN" && valueNumber % 2 == true) {
		console.log("нечётное")
	}
	}
	oddEven()