console.log("Welcome to Tic Tac Toe");
let music = new Audio("bg.mp3");
let turnn = new Audio("ting.mp3");
let gameoverr = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;
let reset = document.getElementById('reset');

//Function to change the turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X" ;
 }

//Function to check for a win
const checkWin =()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25],
        [0,6,3,-9,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135]
    ]

    wins.forEach(e=>{
        if((boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[2]].innerHTML === boxtexts[e[1]].innerHTML) && (boxtexts[e[0]].innerHTML !== ""))
        {
            gameover = true;
            document.querySelector('.info').innerHTML = boxtexts[e[0]].innerHTML + "  WON";
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '150px';
            document.querySelector('.line').style.width='30vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)` ;


            // document.querySelector('.line').style.transform = 'translate(-9vw, 15vw) rotate(90deg)';
            // document.querySelector('.line').style.transform = 'translate(0vw, 15vw) rotate(90deg)';
            // document.querySelector('.line').style.transform = 'translate(10vw, 15vw) rotate(90deg)';

            // document.querySelector('.line').style.transform = 'translate(0vw, 15vw) rotate(45deg)';
            // document.querySelector('.line').style.transform = 'translate(5vw, 15vw) rotate(135deg)';

            // document.querySelector('.line').style.transform='translate(0vw, 5vw)';
            // document.querySelector('.line').style.transform='translate(0vw, 15vw)';
            // document.querySelector('.line').style.transform='translate(0vw, 25vw)';

        }

    })
} 

//Game Logic 
// music.play();
let  boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML= turn;
            turn = changeTurn();
            turnn.play();
            checkWin();
            if( !gameover){
                document.getElementsByClassName('info')[0].innerHTML= "Turn for "+ turn;
            }
        }
        
    })
})

//add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element =>{
        element.innerHTML="";
    });
    turn="X";
    gameover=false;
    if( !gameover){
        document.getElementsByClassName('info')[0].innerHTML= "Turn for "+ turn;
    }
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0px';
})
