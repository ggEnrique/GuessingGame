// Initialize secret number and attempt counter
let numeroSecreto = 0;
let intentos = 0;
let listOfNumbers = []
let numeroMaximo = 10;

// Function to set text content of an HTML element
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

// Function to check the user's guess
function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `You guessed the secret number in ${intentos} ${(intentos === 1) ? 'try!' : 'tries!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('Guess').setAttribute('disabled', 'true');
    } else {
        // User guessed incorrectly
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", `The secret number is lower. You guessed ${numeroDeUsuario}`)
        } else {
            asignarTextoElemento("p", `The secret number is higher. You guessed ${numeroDeUsuario}`)
        }
        intentos++;
        cleanBox();
    }
    return;
}

// Function to clear the input box
function cleanBox() {
    document.querySelector('#valorUsuario').value = '';

}

// Function to generate a random secret number
function generarNumeroSecreto() {
    let generatedNumber = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(generatedNumber)
    console.log(listOfNumbers);

    if (listOfNumbers.length == numeroMaximo) {
        asignarTextoElemento("p", "All numbers played");
    } else {
        if (listOfNumbers.includes(generatedNumber)) {
            return generarNumeroSecreto();
        } else {
            listOfNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
    

}

// Function to set initial conditions of the game
function initialConditions() {
    asignarTextoElemento("h1", "Secret number Game");
    asignarTextoElemento("p", `Enter a number between 1 - ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

// Function to restart the game
function restartGame() {
    cleanBox();
   /*  if (listOfNumbers.length >= numeroMaximo){
        document.getElementById('Guess').setAttribute('disabled', 'true');
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
        asignarTextoElemento("p", "All numbers played");
        return
    } */
    initialConditions();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    document.getElementById('Guess').removeAttribute('disabled');
    
}

// Set initial game conditions on page load
initialConditions();