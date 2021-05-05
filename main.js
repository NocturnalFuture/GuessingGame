// Var holding a number -- parseInt converts string to num
let maxNum = parseInt(prompt("Enter max number!"));
const reStartButton = document.createElement("button");
const anwser = document.querySelector(".anwser");
const button = document.querySelector(".button");
let attempts = 1;


reStartButton.innerHTML ="<h1>Restart</h1>";
// Handle NaN's
while(!maxNum) {
    maxNum =  parseInt(prompt("You've entered am invalid number. Please enter max number!"));
}

const targetNum = Math.floor(Math.random() * maxNum ) + 1;



let guess = parseInt(prompt("Enter your first guess!"));

while(guess !== targetNum) {
    if(guess > targetNum) {
        guess = parseInt(prompt("Too High! Enter a new guess:"))
    } else {
        guess = parseInt(prompt("Too Low! Enter a new guess:"))
    }
}


anwser.innerHTML = `You got it! it took you ${attempts} attempts`
button.appendChild(reStartButton)

// Restart Game -- Reload Page
button.addEventListener("click", () => {
    location.reload(); 
})