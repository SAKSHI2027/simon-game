let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

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
function gameFlash(btn) {
    btn.classList.add("Flash");
    setTimeout(function () {
        btn.classList.remove("Flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    reset();

    let randIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[randIdx];
    let randtbn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(ranColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
function checkAns(idx) {
    //console.log("curr level :", level);
    // let inx = level-1;

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText = `game over! press any kye to start `;
    }
}

function btnPress() {


    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");


    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset() {

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}