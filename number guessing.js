let btn = document.querySelector("#btn");
let hint = document.querySelector(".hint");
let count = document.querySelector(".count");
let randNum = Math.floor(Math.random() * 100) + 1;
let c = 0;

btn.addEventListener("click", guessNo);

function guessNo() {
  console.log("Guess no");
  let inp = document.querySelector("input").value;

  if (inp === "" || isNaN(inp)) {
    console.log("Invalid input");
    return;
  }

  inp = Number(inp);
  c++;

  if (inp < randNum) {
    hint.innerText = "Your guess is too low";
    hint.style.color = "#9F9500";
   
  } 
  else if (inp > randNum) {
    hint.innerText = "Your guess is too high";
    hint.style.color = "red";
  } 
  else {
    hint.innerText = `🎉 Congratulations! You guessed correctly in ${c} tries`;
    hint.style.color = "green";
  }

  count.innerText = `No. of guesses: ${c}`;
}
