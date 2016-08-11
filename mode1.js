
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
			addAlready[i][j] = false; //nothing has been done to each position
		}
	}
}  

function getposTop(i, j) {
	return 20 + i * 120;
}

function getposLeft(i, j) {
	return 20 + j * 120;
}

/*---------------------------- GenerateNumber ----------------------*/
function generateNumb(){
	//generate a random position
	var rx = parseInt(Math.floor(Math.random()*4));
	var ry = parseInt(Math.floor(Math.random()*4));
	//generate a random number
	var rand = Math.random();
	if (rand < 0.5){
		rn = 2;
	} 
	else {
		rn = 4;
	}
	//show the number 
	board[rx][ry] = rn;
	showNumb(rx, ry, rn);
}

function nospace(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(board[i][j] == 0) {
				return false;
			} 
		}
	}
	return true;
}

/*-------------------------------- ShowNumber -----------------------------*/
function showNumb(x, y, n){
	var tileNumb = $('#number-tile-' + x + '-' + y);
	/*tileColor*/
	tileNumb.text(n);

	tileNumb.animate({
		width:"100px",
		height:"100px",
		top: getposTop(x, y),
		left: getposLeft(x ,y)
	});
}