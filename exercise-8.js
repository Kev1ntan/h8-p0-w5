//Logic Challenge - Hapus Simbol (Regex)
console.log('Logic Challenge - Hapus Simbol (Regex)')
function hapusSimbol(str) {
	var hasil = '';
	var numbers = /[0-9]/;
	var words = /[a-z]/i;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i).match(numbers) || str.charAt(i).match(words)) {
			hasil = hasil + str.charAt(i);
		}
	}
	return hasil
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100