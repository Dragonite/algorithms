const input = "***|**|*****|**||**|*";
const q = [[1,17],[4,5],[14,17],[5,11],[15,16]];

const platesBetweenCandles = (table, queries) => {
    const candles = [];
    // O(t) time complexity where t is the number of items on the table
    for (let i = 0; i < table.length; i++) {
        if (table[i] === "|") {
            candles.push(i);
        }
    }
    // Algorithmically we should calculate the first and last candles within this range
    // The amount of elements inbetween the candles MINUS the amount of candles inbetween
    // should be the amount of plates.
    const doubleBinarySearch = (query) => {
        const [queryLeft, queryRight] = query;
        // The search space here will be candles.
        let left = 0;
        let right = candles.length - 1;
        let leftIndex = -1;
        // The first binary search will be searching for the first candle. Should look something like:
        // F F F T T T T T T T
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (candles[mid] >= queryLeft) {
                leftIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        const leftCandle = candles[leftIndex];
        // The second binary search will be searching for the last candle. Should be something like:
        // T T T T T T T T F F
        left = 0;
        right = candles.length - 1;
        let rightIndex = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // However, search space should look for the last.
            if (candles[mid] <= queryRight) {
                rightIndex = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        const rightCandle = candles[rightIndex];
        // Do some error checking
        if (leftIndex === -1 || rightIndex === -1 || leftIndex >= rightIndex) {
            return 0;
        }
        // The plates inbetween will be the total amount of items, i.e. rightIndex - leftIndex,
        // minus the candles inbetween, i.e. the rightIndex within candles - leftIndex within candles.
        return (rightCandle - leftCandle) - (right - leftIndex);
    }

    return queries.map(query => doubleBinarySearch(query));
}

console.log(platesBetweenCandles(input, q));