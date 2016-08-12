//Copyright (c) 2016 Simeng Hua
//This code is available under the "MIT License".
//Please see the file COPYING in this distribution
//for license terms.

function showRank(){
	var nameArray = new Array();
	var scoreArray = new Array();
	for(var i = 0; i <= localStorage.length; i++){
		scoreArray.push(localStorage.key(i));
	}
	var sortedScoreArray = scoreArray.sort(function(a, b){return b-a});
	for(var j = 0; j <= scoreArray.length; j++){
		nameArray.push(localStorage.getItem(localStorage.key(i)));
	}
	for(var r = 0; r <= 7; r++){
		document.getElementById("r").innerHTML = nameArray[r];
	}
}
