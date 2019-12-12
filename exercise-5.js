//Logic Challenge - Kali Terus (Rekursif)
function kaliTerusRekursif(angka) {
	if (angka < 10) {
		return angka
	}
	else {
		var kali = 1;
		angka = angka.toString();
		for (let i = 0; i < angka.length; i++) {
			kali = kali * parseInt(angka.charAt(i));
		}
		return kaliTerusRekursif(kali);
	}
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6