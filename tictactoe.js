
//Show Winner Function

function getWinner(){

	const box1=document.getElementById('no1')
	const box2=document.getElementById('no2')
	const box3=document.getElementById('no3')
	const box4=document.getElementById('no4')
	const box5=document.getElementById('no5')
	const box6=document.getElementById('no6')
	const box7=document.getElementById('no7')
	const box8=document.getElementById('no8')
	const box9=document.getElementById('no9')

	

	//Highlight winners boxes
	const Turn=document.getElementById("turn");
	function selectWinnerBoxes(b1,b2,b3){
		b1.style.background="white"
		b2.style.background="white"
		b3.style.background="white"
		//Change the Title
		turn.innerHTML=b1.innerHTML+" Won Congrats"

		//Scoreboard
		if (b1.innerHTML == "X") {
			xScore++
		} else {
			oScore++
		}

		const scoreBoard= document.getElementsByClassName('scoreboard')[0]
		scoreBoard.innerHTML = "X: " + xScore + " O: " + oScore
		// for( let i=0;i<scoreBoard.length;i++){
		// function score(event){
		//  if(turn.innerHTML="X Won Congrats")
		// }


	}
	//Posibilities of Winning
	if(box1.innerHTML==box2.innerHTML && box1.innerHTML==box3.innerHTML && box1.innerHTML!==''){
		selectWinnerBoxes(box1,box2,box3);
		console.log("win");
		gameWon = true
	}
	else if (box1.innerHTML==box4.innerHTML && box1.innerHTML==box7.innerHTML && box1.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box1,box4,box7);
	}
	else if (box1.innerHTML==box5.innerHTML && box1.innerHTML==box9.innerHTML && box1.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box1,box5,box9);
	}
	else if (box3.innerHTML==box6.innerHTML && box3.innerHTML==box9.innerHTML && box3.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box3,box6,box9);
	}
	else if (box7.innerHTML==box8.innerHTML && box7.innerHTML==box9.innerHTML && box7.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box7,box8,box9);
	}
	else if (box3.innerHTML==box5.innerHTML && box3.innerHTML==box7.innerHTML && box3.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box3,box5,box7);
	}
	else if (box4.innerHTML==box5.innerHTML && box4.innerHTML==box6.innerHTML && box4.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box4,box5,box6);
	}
	else if (box2.innerHTML==box5.innerHTML && box2.innerHTML==box8.innerHTML && box2.innerHTML!==''){
		console.log("win");
		gameWon = true
		selectWinnerBoxes(box2,box5,box8);
	}
	else if (playerTurn == 9) {
		console.log("tie");
	}
}

let playerTurn = 0
let playerXTurn = true
let oScore = 0;
let xScore = 0;
let gameWon = false

//set X or O onclick into the box

const boxes =document.querySelectorAll(".cell")

for(i=0;i<boxes.length;i++){
	boxes[i].onclick=function(event){
		// To stop the value from changing the sign(X/O)
		if(event.target.innerHTML != '' || gameWon) {return}
		playerTurn++
		if(playerXTurn)  {
			// set to X
			event.target.innerHTML = "X"
			turn.innerHTML="O turn Now"
			getWinner();

		}
		else{
			// set to o
			event.target.innerHTML = "O"
			turn.innerHTML="X turn Now"
			getWinner();
		}
		playerXTurn = !playerXTurn

	}
}
function resetGame(){
	// reset boxes
	const boxes =document.querySelectorAll(".cell")
	for(let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = ""
		boxes[i].style = ""
	}
	// reset #turn
	document.querySelector("#turn").innerHTML = "Play"
	playerTurn = 0
	gameWon = false
}










