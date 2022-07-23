const h2 = document.querySelector('h2');  
const btn = document.querySelector('button'); 
const input = document.querySelector('input');  

const numbers = [0,1,2,3,4,5,6,7,8,9]; 
const symbols = ['!', '@', '$', '%', '^', '&', '*', '(', ')'];
const letters = ['q', 'a', 'e', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'b', 'n', 'a', 'v']; 

const len = 2; 
let inputValue = "";  

input.addEventListener('change', (e) => {
    inputValue+=e.target.value; 
})

function generateSymbols() {
   return numbers[Math.floor(Math.random()*(numbers.length - 1))]; 
} 

function generateLetters() {
    return symbols[Math.floor(Math.random()*(symbols.length - 1))]; 
} 

function generateNumbers() {
    return letters[Math.floor(Math.random()*(letters.length - 1))];  
}   

function generatePassword() { 
    let s = "";  

    for(let i = 0; i < inputValue.length; ++i) {
        s+=generateSymbols()+generateLetters()+generateNumbers();
    }  
    
    return s; 
}

btn.addEventListener('click', () => { 
    h2.innerHTML = generatePassword();  
})


