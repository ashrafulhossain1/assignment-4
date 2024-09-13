
// Waiting Time

function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) === true) {
        return "Invalid Input"
    }
    else if(typeof serialNumber !== 'number'){
        return "Invalid Input";
    }

    let sum = 0;
    for (const waitingTime of waitingTimes) {
        sum += waitingTime;
    }
    const interviewed = waitingTimes.length;
    const averageWaitingTime = Math.round(sum / interviewed);
    const beforeIsrat = serialNumber - 1;

    const finalWaitingTime = (beforeIsrat - interviewed) * averageWaitingTime;
    return finalWaitingTime;
}

const delayTime = waitingTime([7, 8, 3, 4, 5], "9");
console.log(delayTime);
