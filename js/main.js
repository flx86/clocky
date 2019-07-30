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
  startStopBtn.classList.toggle("btn-green");
  startStopBtn.classList.toggle("btn-red");
  if (text === "start")
   startStopBtn.innerHTML = `<i class="fas fa-play btn-icon"></i>${text}`
  else
    startStopBtn.innerHTML = `<i class="fas fa-stop btn-icon"></i>${text}`
    
}

// OnLoad
document.addEventListener("DOMContentLoaded", () => {

  let stopWatch = new StopWatch(0, stopWatchElement);

  // Adds Functionality To Start/Stop Button
  startStopBtn.addEventListener("click", () => {
    if (startStopBtn.classList.contains("start")){
      stopWatch.start();
      toggleStartStopButton("stop");
    }else {
      stopWatch.stop()
      toggleStartStopButton("start");
    }
  });

  // Adds Functionality To Reset Button
  resetLapBtn.addEventListener("click", ()=>{
    if(resetLapBtn.classList.contains("reset")) 
      stopWatch.reset();
    else if(resetLapBtn.classList.contains("lap")){
      console.log ("marcar la vuelta");
    }
  })


  // Adds keyup event listener
  document.addEventListener("keyup", (event)=>{
    if(event.code === "Space"){
      if (startStopBtn.classList.contains("start")){
        stopWatch.start();
        toggleStartStopButton("stop");
      }else {
        stopWatch.stop()
        toggleStartStopButton("start");
      }

    }else if (event.code === "KeyR"){
      stopWatch.reset();
    }
  })
});