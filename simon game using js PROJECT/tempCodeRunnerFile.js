let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("kyepress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});
function btnFlash(btn){
  btn.classlist.add("flash");
  setTimeout(function() {
    btn.classlist.remove("flash");
  },250);
}

function levelUp() {
level++;
h2.innerText =`Level ${level}`;
let randIdx = Math.floor(math.random()*3);
let ranColor = btns[randIdx];
let randtbn = document.querySelector(`.${randColor}`);
console.log(randIdx);
console.log(ranColor);
console.log(randBtn);
btnFlash(randBtn);
}

function btnPress () {
    console.log("btn was pressed");
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}