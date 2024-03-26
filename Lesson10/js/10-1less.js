const startBtn = document.querySelector("button");
const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

startBtn.addEventListener("click", start);

function wringOut(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    });
};

function squatting(count) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

function start() {
    console.log("Start training");
    wringOut(10)
        .then(() => {
            console.log("I pushed up 10 times");
            return squatting(20);
        }).then(() => {
            console.log("I squatted 20 times");
        });
}