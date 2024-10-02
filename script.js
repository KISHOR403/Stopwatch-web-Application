let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer;
let lapTimes = [];

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    lapTimes = [];
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    displayLapTimes();
});

lapBtn.addEventListener('click', function () {
    if (timer) {
        const lapTime = formatTime(hour, minute, second, count);
        lapTimes.push(lapTime);
        displayLapTimes();
    }
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10);
    }
}

function formatTime(hr, min, sec, count) {
    return `${hr < 10 ? "0" + hr : hr}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}.${count < 10 ? "0" + count : count}`;
}

function displayLapTimes() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = "";
    lapTimes.forEach((lap, index) => {
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${index + 1}: ${lap}`;
        lapList.appendChild(lapItem);
    });
}