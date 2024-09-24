# Projects related to DOM

## Project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener('click',function(e){ // YAHA e EK EVENT KA OBJECT HAI BAS (LIKE A VARIABLE)
    console.log(e);
    console.log(e.target); // ISSE PATA CHAL JAYEGA KI EVENT AA KAHA SE RAHA HAI
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }    
  })
} )
```

## PROJECT 2 SOLUTION

```javascript

const form = document.querySelector('form')
// agar ham values yahi le lete hai
// toh hame empty milega

// form ya toh POST type se submit hota hai ya GET type se, lekin jab bhi submit hota hai toh uski values URL ya server ke paas chali jaati hai
// aur issi cheez ko hame rokna hai i.e., STOP THE DEFAULT ACTION OF FORM

// for this, we can use a method of events

// e.preventDefault()

form.addEventListener('submit',function(e){
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value) // parseInt converts strings into integers

  const weight = parseInt(document.querySelector('#weight').value)

  const results = document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`
  }
  else{
    var bmi = (weight/((height*height)/10000)).toFixed(2)
    // SHOW THE RESULT
    results.innerHTML = `<span>${bmi}</span>`
  }
  if(bmi<18.6){
    range.innerHTML = "Under weight"
  }
  else if(bmi>=18.6 && bmi<=24.9){
    range.innerHTML = "Normal range"
  }
  else{
    range.innerHTML = "Overweight"
  }
})


```

## PROJECT 3 SOLUTION

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock)

// WE CAN USE cron job LEKIN AGAR SUI KE BAARE MEIN BAAT HO RAHI HAI TOH TALWAAR KYO NIKALNA

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
}, 1000) // HERE 1000 is milliseconds

// setInterval(function(){},1000)

```

## PROJECT 4 SOLUTION

```javascript

let randomNumber = (parseInt(Math.random()*100+1)); // WE HAVE USED parseInt BECAUSE IT IS GIVING DECIMAL NUMBER

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value) // STORING THE VALUE OF THE USER INPUT INSIDE guess
    console.log(guess);
    validateGuess(guess)
  })
}

// FUNCTION TO CHECK WHETHER THE INPUT DATA IS A NUMBER OR NOT
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess<1){
    alert('Please enter a number more than 1')
  }
  else if(guess>100){
    alert('Please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
    }
  }
}

// FUNCTION TO CHECK IF THE NUMBER ENTERED BY THE USER IS SAME AS THE RANDOM NUMBER OR NOT
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if(guess<randomNumber){
    displayGuess(`Number is TOOO low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

function displayGuess(guess) {
   userInput.value = ''  // displayGuess ALSO WORKS AS A CLEANUP METHOD
   guessSlot.innerHTML += `${guess}    `
   numGuess++;
   remaining.innerHTML = `${11-numGuess}`
}

// FUNCTION TO DISPLAY MESSAGE TO THE USER
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// FUNCTION TO END THE GAME
function endGame(){
  userInput.value='' // VALUE CLEAN
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
  startOver.appendChild(p)
  playGame = false
  newGame()
}

// FUNCTION TO START A NEW GAME
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = (parseInt(Math.random()*100+1));
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

// KEEP THE TRACK OF THIS PROJECT USING A DETAILED VIEW OF THE DOM ON A PAPER

// IF YOU HAVE A TRACK OF THIS PROJECT USING DOM THEN YOU CAN EASILY UNDERSTAND THE PROJECT AND CAN MAKE CHANGES TO IT AFTERWARDS VERY EASILY



```