'use srtict'

const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const resetBtn = document.querySelector(".js-reset");
const saveBtn = document.querySelector(".js-take-lap");
const ul = document.querySelector(".js-laps");
const arrayOfLap = [];

class Timer {
    constructor({update, save}) {
        this.startTime = null;
        this.deltaTime = null;
        this.id = null;
        this.isActive = false;
        this.update = update;
        this.save = save;
        this.temp = null;
    }

    start() {
        if (!this.isActive) {
            this.isActive = true;
            this.startTime = Date.now() - this.temp;
            this.id = setInterval(() => {
                const curentTime = Date.now();
                this.deltaTime = curentTime - this.startTime;
                const time = new Date(this.deltaTime);

                let min = time.getMinutes();
                if (min < 10) {
                    min = `0${min}`;
                };
                let sec = time.getSeconds();
                if (sec < 10) {
                    sec = `0${sec}`;
                };
                let ms = Number.parseInt(time.getMilliseconds() / 100);
                this.update({min, sec, ms});
                this.temp = time;
                startBtn.textContent = 'Pause';
            }, 100);
        } else if (this.isActive) {
            this.isActive = false;
            clearInterval(this.id);
            let min = this
                .temp
                .getMinutes();
            if (min < 10) {
                min = `0${min}`;
            };
            let sec = this
                .temp
                .getSeconds();
            if (sec < 10) {
                sec = `0${sec}`;
            };
            let ms = Number.parseInt(this.temp.getMilliseconds() / 100);
            this.update({min, sec, ms});
            startBtn.textContent = 'Continue';
        }
    }

    reset() {
        this.isActive = false;
        clearInterval(this.id);
        this.startTime = null;
        this.deltaTime = null;
        this.temp = null;
        this.update({min: `00`, sec: `00`, ms: 0});
    }

    saved() {
        this.save();
    }
}

const timer = new Timer({update: updateTime, save: saveResult});

startBtn.addEventListener('click', timer.start.bind(timer));
resetBtn.addEventListener('click', timer.reset.bind(timer));
saveBtn.addEventListener('click', timer.saved.bind(timer));

function updateTime({min, sec, ms}) {
    time.textContent = `${min}:${sec}.${ms}`;
}

function saveResult() {
    const li = document.createElement('li');
    li.textContent = time.textContent;
    ul.appendChild(li);
    arrayOfLap.push(li.textContent);
    console.log(arrayOfLap);
}


