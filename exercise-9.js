//Logic Challenge - Cari Pelaku (Regex)
function cariPelaku(str) {
	var hasil = 0;
	var regex = /abc/;
	for (let i = 0; i < str.length-2; i++) {
		if((str.charAt(i) + str.charAt(i+1) + str.charAt(i+2)).match(regex)) {
			hasil = hasil + 1;	
		}
	}
	return hasil;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2