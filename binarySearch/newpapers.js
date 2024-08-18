// Find minimum in rotated sorted array

const valuesToTest = [[[2,3,5,7], 3], [[7,2,5,10,8], 2]];

// Given the logic that the maximum amount of time that can be taken is 1 worker does all of the newpapers
// The minimum amount of time that is required is for n newspapers, if there are n workers, the largest newspaper is the minimum
// Then we can determine the left and right values of our binary search.
const newspapers = (readTimes, numWorkers) => {
    // We have a helper function as the feasible function that will essentially calculate if a value is possible for a given number of workers
    const isTimePossible = (limit) => {
        let workers = 1, time = 0;
        for (const readTime of readTimes) {
            if (readTime > limit) {
                return false;
            }
            if (time + readTime > limit) {
                workers++;
                time = readTime;
                if (workers > numWorkers) return false;
            } else {
                time += readTime;
            }
        }
        return true;
    }
    let left = Math.max(...readTimes);
    let right = readTimes.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    let boundaryIndex = -1;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        if (isTimePossible(midPoint)) {
            boundaryIndex = midPoint;
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
    }
    return boundaryIndex;
}

valuesToTest.forEach(([readTime, numWorkers]) => {
    console.log(newspapers(readTime, numWorkers));
});
