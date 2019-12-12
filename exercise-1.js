function sorting(arrNumber) {
	var sort = arrNumber.sort(function(a, b) {return b - a});
	return sort;
}

function getTotal(arrNumber) {
	if (arrNumber.length !== 0) {
		var jumlah = 0;
		for (let i = 0; i < arrNumber.length; i++) {
			if (arrNumber[i] === arrNumber[0]) {
			jumlah = jumlah + 1;
			}
			else{
				break;
			}
		}
		return `'angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${jumlah} kali'`
	}
	else {return `[]`}
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''