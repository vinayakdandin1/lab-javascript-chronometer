const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMilTime() {
  printMilliseconds()
}

function printMinutes() {
  let min = chronometer.getMinutes()
  
  let minAnswer = chronometer.twoDigitsNumber(min)
  
  let firstMin = minDec.innerHTML = minAnswer[0]
  let secondMin = minUni.innerHTML = minAnswer[1]

  return `${firstMin}${secondMin}`
}

function printSeconds() {
  let sec = chronometer.getSeconds()

  let answer = chronometer.twoDigitsNumber(sec)
  let firstSec = secDec.innerHTML = answer[0]
  let secondSec = secUni.innerHTML = answer[1]
  
  return `${firstSec}${secondSec}`
}

// ==> BONUS

function printMilliseconds() {
  let myMil = chronometer.getMiliSec()

  let milAnswer = chronometer.twoDigitsNumber(myMil)
  let firstMil = milDec.innerHTML = milAnswer[0]
  let secondMil = milUni.innerHTML = milAnswer[1]

  return `${firstMil}${secondMil}`
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  document.querySelector("#splits").innerHTML = ""
}

function setStopBtn() {
  chronometer.stopClick()
  btnLeft.className = "btn start"
  btnLeft.innerHTML = "START"
  btnRight.className = "btn reset"
  btnRight.innerHTML = "RESET"
}

function setSplitBtn() {
  let oneChild = document.createElement("li")
  let myOl = document.querySelector("#splits")
  myOl.appendChild(oneChild)
  myOl.lastChild.innerHTML = `${printMinutes()}:${printSeconds()}:${printMilliseconds()}`
}

function setMilBtn() {
  chronometer.startMili(printMilTime)
}


function setStartBtn() {
  chronometer.startClick(printTime)
  btnLeft.className = "btn stop"
  btnLeft.innerHTML = "STOP"
  btnRight.className = "btn split"
  btnRight.innerHTML = "SPLIT"
}

function setResetBtn() {
  chronometer.resetClick()
  secUni.innerHTML = "0"
  secDec.innerHTML = "0"
  minUni.innerHTML = "0"
  minDec.innerHTML = "0"
  milUni.innerHTML = "0"
  milDec.innerHTML = "0"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  if(btnLeft.className === "btn start") {
    setStartBtn()
    setMilBtn()
  } else {
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if(btnRight.className === "btn reset") {
    setResetBtn()
    clearSplits()
  } else {
    setSplitBtn()
  
  }
});
