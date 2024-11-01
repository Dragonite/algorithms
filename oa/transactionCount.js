const input = ['88 90 200', '88 91 200', '88 90 100', '12 12 100'];
const threshold = 2;

const processLogs = (logs, threshold) => {
    const map = new Map();
    logs.forEach(log => {
        const [sender, receiver] = log.split(' ');
        if (map.has(sender)) {
            map.set(sender, map.get(sender) + 1);
        } else {
            map.set(sender, 1);
        }
        if (map.has(receiver)) {
            if (sender !== receiver) {
                map.set(receiver, map.get(receiver) + 1);
            }
        } else {
            map.set(receiver, 1);
        }
    })
    const finalArray = [];
    Array.from(map.keys()).forEach(key => {
        if (map.get(key) < threshold ) return;
        const numericalValue = parseInt(key, 10);
        let left = 0;
        let right = finalArray.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (numericalValue < finalArray[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        finalArray.splice(left, 0, key);
    })
    return finalArray;
}

console.log(processLogs(input, threshold));

