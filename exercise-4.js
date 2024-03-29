//Logic Challenge - Total Digit (Rekursif)
function totalDigitRekursif(angka) {
	if (angka < 10) {
		return angka;
	}
	else {return parseInt(angka.toString().slice(0, 1)) + 
	totalDigitRekursif(parseInt(angka.toString().slice(1)))};
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5