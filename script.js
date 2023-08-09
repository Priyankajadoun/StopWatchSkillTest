var display = document.getElementById('display');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var sec = 0;
var min = 0;
var hour = 0;
var id = null; 
var pausedTime = 0; // Store the time when the stopwatch is paused

function stopWatch() {
     // Increment seconds and adjust minutes and hours if necessary
     sec++;
     if (sec > 60) {
         min++;
         sec = 0;
     }
     if (min > 60) {
         hour++;
         min = 0;
         sec = 0;
     }
    // Format seconds, minutes, and hours
    var formattedSec = sec < 10 ? "0" + sec : sec;
    var formattedMin = min < 10 ? "0" + min : min;
    var formattedHour = hour < 10 ? "0" + hour : hour;
    // Construct the time string in "hh:mm:ss" format
    var time = formattedHour + ":" + formattedMin + ":" + formattedSec;
    console.log(time);
   
    return time;
}


//  Define handleStart , handleStop and handleReset Functions


function handleStart() {
    // Check if an interval is already active
    if (id === null) {
        // Adjust the start time based on the paused time
        var now = new Date().getTime();
        var startTime = now - pausedTime;
        
        id = setInterval(function () {
            var currentTime = new Date().getTime();
            var elapsedTime = Math.floor((currentTime - startTime) / 1000) + pausedTime;

            // Update the stopwatch display
            display.innerText = stopWatch();

            // Store the paused time for adjustments when starting again
            pausedTime = elapsedTime;
        }, 1000);
    }
}

function handleStop(){
    clearInterval(id);
    id = null;
    console.log("stop");
}
function handleReset(){
    clearInterval(id);
    id = null;
    pausedTime = 0;
    sec = 0;
    min = 0;
    hour = 0;
    display.innerText = "00:00:00";

}
// Call the event listeners
start.addEventListener('click',handleStart)
stop.addEventListener('click',handleStop)
reset.addEventListener('click',handleReset)

