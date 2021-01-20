class Chronometer {
  constructor() {
      this.currentTime = 0
      this.intervalId = 0
      this.miliTIme = 0
      this.miliIntervalid = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      callback()
      //console.log(this.currentTime);
    }, 1000);
  }

  startMili(milCallBack) {
    this.miliIntervalid = setInterval(() => {
      //console.log("milsec called");
      this.miliTIme += 1
      milCallBack()
    }, 10)
  }

  getMiliSec() {
    let mil = this.miliTIme
    if(mil > 99) {
      mil = mil % 100
      return mil
    } else if (mil < 10) {
      return `0${mil}`
    }
    return mil
  }

  getMinutes() {  
    if(this.currentTime < 60) {
      return 0
    }
    return Math.floor(this.currentTime /60)
  }
  getSeconds() {
    let moreTime = this.currentTime
    //console.log(`from getSeconds ${moreTime}`);
    if(moreTime > 60) {
      moreTime = moreTime % 60
      //console.log(`second moretime: ${moreTime}`);
      return moreTime
    } 
    //console.log(`from else: ${moreTime}`);
    return moreTime
    
  }
  twoDigitsNumber(anyNum) {
    //console.log("Called twoDigitsNumber");
    if(anyNum < 10) {
        if(anyNum < 10) {
          return ("0" + `${anyNum}`)  
      }
    } return `${anyNum}`
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.miliIntervalid)
  }
  resetClick() {
    this.currentTime = 0
    return this.currentTime
  }
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return (`${0}${min}:${0}${sec}`);
    } else if (min < 10 && sec > 10) {
      return (`0${min}:${sec}`);
    } else if (min > 10 && sec < 10) {
      return (`${min}:0${sec}`);
    } else {
      return (`${min}:${sec}`);
    }
  }
}
