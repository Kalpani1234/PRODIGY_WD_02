let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("timer-start").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("timer-pause").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("timer-reset").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }