let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORhi = document.querySelector('.lowORhi')
const startOver = document.querySelector('.resultparas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter the valid number')
    } else if (guess < 1) {
        alert('please enter the number more than one')
    } else if (guess > 100) {
        alert('please enter the number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 9) {
            displayguess(guess)
            displayMessage(`Game over. random number was ${randomNumber}`)
            EndGame()
        } else {
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`AAP JEETE 7 CRORE`)
        EndGame()
    } else if (guess < randomNumber) {
        displayMessage(`Calculator bhi error dikha raha hai!😂 `)

    } else if (guess > randomNumber) {
        displayMessage(`Calculator bhi overload ho gaya! 🔥`)

    }
}

function displayguess(guess) {
    userInput.value = ''
    guessslot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowORhi.innerHTML = `<h2>${message}</h2>`
}

function EndGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="NewGame">Start New Game</h2>`
    startOver.appendChild(p);
    //add the start  new game button when the game is end
    playgame = false;
    NewGame();
}
function NewGame() {

    const newgamebutton = document.querySelector('#NewGame')
    newgamebutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}`
        userInput.removeAttribute( 'disabled')
        startOver.removeChild(p);

        playgame = true;
    })
}





