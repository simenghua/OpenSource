
/*---------------------------- NewGame ------------------------*/
$(document).ready(function() {
	newgame();
});

function newgame() {
	init();
	generateNumb();
}	

/*------------------ InitiateBoard -----------------*/
var board = new Array();
var addAlready = new Array();

function init() {
	for(var i = 0; i < 4; i++) {
		for(var j = 0; j < 4; j++) {
			var gridtile = $("#grid-tile-" + i + "-" + j);
			gridtile.css('top', getposTop(i, j));
			gridtile.css('left', getposLeft(i, j));
		}
	}
	for(var i = 0; i < 4; i++){
		board[i] = new Array();
		addAlready[i] = new Array();
		for(var j = 0; j < 4; j++){
			board[i][j] = 0;
			addAlready[i][j] = true;
		}
	}
}  

function getposTop(i, j) {
	return 20 + i * 120;
}

function getposLeft(i, j) {
	return 20 + j * 120;
}

/*------------------ GenerateNumber -----------------*/