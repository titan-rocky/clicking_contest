"use strict";
console.log("Fc");
let count = 0;
let highscore = 0;
let defaulttime = 15;
const button = document.getElementById("clickme");
const res = document.getElementById("reset");
const label = document.getElementById("counter");
const timesec = document.getElementById("timesec");
const hsclabel = document.getElementById("highsc");
const cpslabel = document.getElementById("cps");
let time = defaulttime;
timesec.textContent = time + "s";
function timer() {
    if (time - 1) {
        time--;
        timesec.textContent = time + "s";
    }
    else {
        timesec.textContent = 0 + "s";
        if (highscore < count) {
            highscore = count;
            hsclabel.textContent = highscore;
            cpslabel.textContent = (count / defaulttime).toFixed(2) + " clicks/sec";
        }
        button.disabled = true;
        clearInterval(timer);
    }
}
var a = 0;
var timerrun = 0;
function countg() {
    if (a == 0) {
        timerrun = setInterval(timer, 1000);
        a = 1;
    }
    count++;
    if (count > highscore) {
        label.style["animation"] = "firetext 0.5s linear 0s infinite alternate";
    }
    else {
        label.style.color = "#e1d9cf";
        label.style["animation"] = "";
    }
    label.textContent = "Count : " + count;
    console.log(count);
}
button.addEventListener("click", countg);
function resettime() {
    count = 0;
    time = defaulttime;
    clearInterval(timerrun);
    timesec.textContent = time + "s";
    button.disabled = false;
    a = 0;
    label.textContent = "Count : " + count;
}
res.addEventListener("click", resettime);
