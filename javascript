let timerId = document.getElementById('0');

let isRunning = false;
let time = 25 * 60;
let timer;

let timerIdval = timerId.innerHTML

function shortbreak(){
    timerId.innerHTML= '05:00'
}
function longbreak(){
    timerId.innerHTML = '15:00'
}

function reset(){
   timerId.innerHTML = '15:00'
}
function Display() {
            let mins = Math.floor(time / 60).toString().padStart(2, '0');
            let secs = (time % 60).toString().padStart(2, '0');
            timerId.textContent = `${mins}:${secs}`;
        }

function start() {
        if (!isRunning) {
             isRunning = true;
                timer = setInterval(() => {
                    if (time > 0) {
                        time--;
                        Display();
                    } else {
                        clearInterval(timer);
                        isRunning = false;
                        alert("Time's up!");
                    }
                }, 1000);
            }
        }

function stop() {
       clearInterval(timer)
       isRunning = false;
       
       Display();
        }

Display();
