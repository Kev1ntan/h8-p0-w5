//Logic Challenge: Melee Ranged Grouping
function meleeRangedGrouping (str) {
	if (str.length !== 0) {
		var pisah1 = str.split(',');
		var pisah2 = []
		var hasil = [[],[]]
		for (let i = 0 ;i < pisah1.length; i++) {
		pisah2.push(pisah1[i].split('-'));
		}
		for (let i = 0 ;i < pisah2.length; i++) {
			for (let j = 0 ;j < pisah2[i].length-1; j++) {
				if(pisah2[i][1]=='Ranged') {
					hasil[0].push(pisah2[i][j]);
				}
				else if(pisah2[i][1]=='Melee') {
					hasil[1].push(pisah2[i][j]);
				}
			}
		}
	return hasil;	
	}
	else {return []}
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []