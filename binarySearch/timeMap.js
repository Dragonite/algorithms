class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        const history = this.map.get(key);
        if (history) {
            history.push([value, timestamp]);
        } else {
            this.map.set(key, [[value, timestamp]]);
        }
    }

    get(key, timestamp) {
        const history = this.map.get(key);
        if (!history) {
            return;
        } else {
            let left = 0;
            let right = history.length - 1;
            let value = -1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                // T T T T T F F, aka get the last true.
                const [, historicTimestamp] = history[mid];
                if (historicTimestamp <= timestamp) {
                    value = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            if (history === -1) return;
            const [stringValue] = history[value];
            console.log(stringValue);
            return stringValue;
        }
    }
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
timeMap.get("foo", 1);
timeMap.get("foo", 3);
timeMap.set("foo", "bar2", 4);
timeMap.get("foo", 4);
timeMap.get("foo", 5);