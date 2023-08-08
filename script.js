var display = document.getElementById('display');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var sec = 0;
var min = 0;
var hour = 0;
var id; 

function stopWatch() {
    // Format seconds, minutes, and hours
    var formattedSec = sec < 10 ? "0" + sec : sec;
    var formattedMin = min < 10 ? "0" + min : min;
    var formattedHour = hour < 10 ? "0" + hour : hour;
    // Construct the time string in "hh:mm:ss" format
    var time = formattedHour + ":" + formattedMin + ":" + formattedSec;
    console.log(time);
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
    return time;
}


//  Define handleStart , handleStop and handleReset Functions
function handleStart(){
    // Update the display element every second
     id = setInterval(function () {
        display.innerText = stopWatch();
    }, 1000);
}
function handleStop(){
    clearInterval(id);
    console.log("stop");
}
function handleReset(){
  sec = 0 ; 
  min = 0;
  hour =0;
  clearInterval(id);
  display.innerText ="00:00:00";

}
// Call the event listeners
start.addEventListener('click',handleStart)
stop.addEventListener('click',handleStop)
reset.addEventListener('click',handleReset)

