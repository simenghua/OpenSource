
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

/*--------------------------- ChangeColor ----------------------------*/
function getBcolor(n){
	switch(n){
		case 2: 
			return "#000000";
		break;
		case 4: 
			return "#111111";
		break;
		case 8: 
			return "#222222";
		break;
		case 16: 
			return "#333333";
		break;
		case 32: 
			return "#444444";
		break;
		case 64: 
			return "#555555";
		break;
		case 128: 
			return "#666666";
		break;
		case 256: 
			return "#777777";
		break;
		case 512: 
			return "#888888";
		break;
		case 1024: 
			return "#999999";
		break;
		case 2048: 
			return "#101010";
 		break;
	}
}

function getNumbColor(n){
	if( n <= 4 ){
		return "black";
	} 
	else {
		return "white";
	}
}

/*---------------------------- GenerateNumber ----------------------*/
function generateOneNumb(){
	if(nospace(board)){
		return false;
	}
	//generate a random position
	var rx = parseInt(Math.floor(Math.random()*4));
	var ry = parseInt(Math.floor(Math.random()*4));
	while(true){
		if(board[rx][ry] == 0) {
			break;
		}
		else {
			var rx = parseInt(Math.floor(Math.random()*4));
			var ry = parseInt(Math.floor(Math.random()*4));
		}
	} 
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
	return true;
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
	tileNumb.css('background-color', getBcolor(n));
	tileNumb.css('color', getNumbColor(n));
	tileNumb.text(n);

	tileNumb.animate({
		width:"100px",
		height:"100px",
		top: getposTop(x, y),
		left: getposLeft(x ,y)
	});
}