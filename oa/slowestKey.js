const inputTimes = [12,23,36,46,62];
const inputKeys = 'spuda';

const slowestKey = (times, keys) => {
    let slowestKey = 0;
    let slowestTime = 0;

    for (let i = 0; i < keys.length; i++) {
        // 0th case
        const speed = !i ? times[0] : times[i] - times[i - 1];
        console.log(slowestTime, speed, `${keys[i]}`.charCodeAt(0))
        if ((speed > slowestTime)) {
            slowestKey = `${keys[i]}`.charCodeAt(0);
            slowestTime = speed;
        } else if ((speed == slowestTime) && (`${keys[i]}`.charCodeAt(0) > slowestKey)) {
            slowestKey = `${keys[i]}`.charCodeAt(0);
        }
    }

    return slowestKey ? String.fromCharCode(slowestKey) : undefined;
}

console.log(slowestKey(inputTimes, inputKeys));