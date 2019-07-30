// DOM elements
const startStopBtn = document.querySelector(".start");
const resetLapBtn = document.querySelector(".reset");
const stopWatchElement = document.querySelector(".stopwatch");


// Functions
function formatTime(number) {
  return ("00"+ number).substr(-2);
}

function toggleStartStopButton (text){
  startStopBtn.classList.toggle("start");
  startStopBtn.classList.toggle("stop");
  startStopBtn.innerText = text;
}

// OnLoad
document.addEventListener("DOMContentLoaded", () => {

  let stopWatch = new StopWatch(0, stopWatchElement);

  // Add Functionality To Start/Stop Button
  startStopBtn.addEventListener("click", () => {
    if (startStopBtn.classList.contains("start")){
      stopWatch.start();
      toggleStartStopButton("stop");
    }else {
      stopWatch.stop()
      toggleStartStopButton("start");
    }
  });

  

  resetLapBtn.addEventListener("click", ()=>{
    if(resetLapBtn.classList.contains("reset"))
      
      stopWatch.reset();
    else if(resetLapBtn.classList.contains("lap")){
      console.log ("marcar la vuelta");
    }
  })



});