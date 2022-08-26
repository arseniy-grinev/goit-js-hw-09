

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

stopBtn.disabled = true;
let colorChgInterval = 0;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(e) {
    e.target.disabled = true;
    stopBtn.disabled = false;

    changeBodyColor();
    colorChgInterval = setInterval(changeBodyColor, 1000);

    stopBtn.addEventListener('click', onStopBtnClick);
    startBtn.removeEventListener('click', onStartBtnClick);
}

function onStopBtnClick(e) {
    e.target.disabled = true;
    startBtn.disabled = false;
    
    clearInterval(colorChgInterval);

    startBtn.addEventListener('click', onStartBtnClick);
    stopBtn.removeEventListener('click', onStopBtnClick);
}

function changeBodyColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
