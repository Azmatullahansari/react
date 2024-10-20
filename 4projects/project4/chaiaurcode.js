let randomnumber = parseInt(Math.random()*100+1); 
console.log(randomnumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot =document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess =  parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess){
     if(isNaN(guess)){
         alert("please anter a valid number");
     }
    else if(guess<1){
        alert("please anter a number greater than 1");
    }
    else if(guess>100){
        alert("please anter a number smaller than 100");
    }
    else{
            prevGuess.push(guess);
            if(numGuess===11){
                displayGuess(guess);
                diaplayMessage(`Game Over. The Random number was ${randomnumber}`);
                endGame();
            } 
            else{
                displayGuess(guess);
                checkGuess(guess);
            }
    }
}

function checkGuess(guess){
    if(guess === randomnumber){
        diaplayMessage("you guessed it right");
        endGame();
    }else if(guess > randomnumber){
        diaplayMessage("The number id greater then random number");
    }
    else if(guess<randomnumber){
        diaplayMessage("The number is too low");
    }

}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;

}

function diaplayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomnumber =parseInt(Math.random()*100+1); 
        prevGuess = [];
        numGuess =1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled', '');
        startOver.removeChild(p);
        playGame= true;

    })

}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame" > Start new Game</h2>'
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
