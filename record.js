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
	
}
