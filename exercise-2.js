//Logic Challenge - Password Generator
function changeVocals (str) {
	var vocal = 'abefijopuvABEFIJOPUV';
	var pisah = str.split('');
	for (let i=0; i < str.length; i++) {
		if(pisah[i] === 'a'||pisah[i] === 'e'||pisah[i] === 'i'||pisah[i] === 'o'||pisah[i] === 'u'||pisah[i] === 'A'||pisah[i] === 'E'||pisah[i] === 'I'||pisah[i] === 'O'||pisah[i] === 'U') {
			pisah[i] = vocal[(vocal.indexOf(pisah[i]))+1];
		}
	}
	return pisah;
}

function reverseWord (str) {
	var balik = str.reverse();
	return balik;
}

function setLowerUpperCase (str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			str[i] = str[i].toUpperCase();
		}
		else if (str[i] === str[i].toUpperCase()) {
			str[i] = str[i].toLowerCase();
		}
	}
	return str;
}

function removeSpaces (str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === ' ') {
			str[i] = '';
		}
	}
	var gabung = str.join('');
	return "'" + gabung + "'";
}

function passwordGenerator (name) {
	if(name.length < 5) {
		return `'Minimal karakter yang diinputkan adalah 5 karakter'`
	}
	var hasilChange = changeVocals (name);
	var hasilReverse = reverseWord (hasilChange);
	var hasilRemove = setLowerUpperCase (hasilReverse);
	var hasilAkhir = removeSpaces(hasilRemove)
	return hasilAkhir;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'