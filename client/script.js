
// global state of timer
let isRunning = false;
// recorded in seconds, i.e. 20 minutes * 60 seconds
let currentTime = 1200;
// timer instance
let timer;

/**
 * Handles click event from DOM
 */
function handleClick() {
    if (!isRunning) {
        isRunning = true;
        startTimer()
    } else {
        clearInterval(timer)
        isRunning = false
    }
}

/**
 * Instantiates timer variable and sets value in DOM
 */
function startTimer() {
    timer = setInterval(() => {
        currentTime--;
        document.getElementById("timer").innerHTML = convertSecondsToTime(currentTime);
    }, 1000);
}

/**
 * Converts seconds to Minute:Second format string
 * @param {Integer} n 
 */
function convertSecondsToTime(n) {
    // Minute converted using bitwise operator
    return `${(n / 60) | 0}:${(n % 60)}`;
}