
/*---------------------------- NewGame ------------------------*/
$(document).ready(function() {
	newgame();
});

function newgame() {
	init();
	generateOneNumb();
	generateOneNumb();
}	

/*------------------ InitiateAndUpdateBoard -----------------*/
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
	updateBoard();
}  

function getposTop(i, j) {
	return 20 + i * 120;
}

function getposLeft(i, j) {
	return 20 + j * 120;
}

function updateBoard(){
	$(".number-tile").remove();
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			$("#grid-container").append('<div class="number-tile" id="number-tile-'+i+'-'+j+'"></div>');
			var tileNumb = $('#number-tile-'+i+'-'+j);
			if(board[i][j] == 0){
				tileNumb.css('width', '0px');
				tileNumb.css('height', '0px');
				tileNumb.css('top', getposTop(i, j) + 50); //put it at tile center
				tileNumb.css('left', getposLeft(i, j) + 50);
				addAlready[i][j] = false;
			} 
			else{
				tileNumb.css('width', '100px');
				tileNumb.css('height', '100px');
				tileNumb.css('top', getposTop(i, j));
				tileNumb.css('left', getposLeft(i, j));
				tileNumb.css('background-color', getBcolor(board[i][j]));
				tileNumb.css('color', getNumbColor(board[i][j]));
				tileNumb.text(board[i][j]);
				addAlready[i][j] = false;
			}
			
		}
	}
}


/*--------------------------- ChangeColor ----------------------------*/
function getBcolor(n){
	switch(n){
		case 2: return "#CEF6EC";
		break;
		case 4: return "#A9F5E1";
		break;
		case 8: return "#81F7D8";
		break;
		case 16: return "#58FAD0";
		break;
		case 32: return "#2EFEC8";
		break;
		case 64: return "#00FFBF";
		break;
		case 128: return "#01DFA5";
		break;
		case 256: return "#04B486";
		break;
		case 512: return "#088A68";
		break;
		case 1024: return "#088A4B";
		break;
		case 2048: return "#04B431";
 		break;
	}
	return "black";
}

function getNumbColor(n){
	if( n <= 4 ){
		return "#04B486";
	} 
	else {
		return "white";
	}
}

/*---------------------------- GenerateOneNumber ----------------------*/
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