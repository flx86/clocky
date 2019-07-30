class StopWatch  {
  constructor (time, element){
    this.time = time;
    this.lastUpdatedTime = new Date().getTime();
    this.interval = 0;
    this.element = element;
    this.displayTime(new Date(this.time));
  }

  update() {    
    let currentTime = new Date().getTime(),
    delta = currentTime - this.lastUpdatedTime;
    this.time += delta;    
    let time = new Date(this.time);
    this.lastUpdatedTime = currentTime;
    this.displayTime(time);
  }

  start(){
    if (!this.interval) {
      this.lastUpdatedTime = new Date().getTime();
      this.interval = setInterval(this.update.bind(this), 1);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = 0;
  }

  reset(){
    const time = new Date(0)
    this.time = 0;
    this.displayTime(time);
  }

   displayTime (time){
    const minutesElement = this.element.firstElementChild;
    const secondsElement = minutesElement.nextElementSibling
    const milliSecondsElement = secondsElement.nextElementSibling;

    minutesElement.innerText = formatTime(time.getMinutes());
    secondsElement.innerText = formatTime(time.getSeconds());
    milliSecondsElement.innerText = formatTime(Math.floor(time.getMilliseconds() / 10));
  }

}
