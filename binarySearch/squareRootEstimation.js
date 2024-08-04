// Square root estimation

const squareRootEstimation = (target) => {
    const arr = Array(target + 1).fill(0).map((_value, index) => index);
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = undefined;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        const squared = Math.pow(arr[midPoint], 2);
        if (squared === target) {
            // Can return immediately if found.
            return arr[midPoint];
        } else if (squared < target) {
            boundaryIndex = midPoint;
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return arr[boundaryIndex];
}

const valuesToTest = [16, 8, 9, 70, 99];

valuesToTest.forEach(value => {
    console.log(`Square root estimation for ${value} is:`, squareRootEstimation(value));
});
