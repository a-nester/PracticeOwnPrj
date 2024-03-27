const form = document.querySelector(".feedback-form")

const WRING_OUT_TIME = 500;
const SQUATTING_TIME = 200;

form.addEventListener("submit", start);

function wringOut(count) {
    return new Promise((resolve, reject) => {
        if (count > 100) {
            reject(new Error("Too much push ups!"));
        }
        setTimeout(() => {
            resolve();
        }, count * WRING_OUT_TIME);
    });
};

function squatting(count) {
    return new Promise((resolve, reject) => {
        if (count > 1000) {
            reject (new Error("Too much squatting!"))
        }
        setTimeout(() => {
            resolve();
        }, count * SQUATTING_TIME);
    })
}

async function start(event) {
    event.preventDefault();
    const pushUps = event.target[0].value;
    const squads = event.target[1].value;
    if (pushUps <= 0 || squads <= 0) {
        return console.log("Wrong numbers!");
    }
    try {
        console.log("Start training");
        await wringOut(pushUps)
        console.log(`I pushed up ${pushUps} times`);
        await squatting(squads);
        console.log(`I squatted ${squads} times`);
        return true;
    } catch (err) {
        console.log(err.toString());
        return false;
    };
        
}