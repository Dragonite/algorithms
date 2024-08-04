// Square root estimation

const squareRootEstimation = (target) => {
    let left = 0;
    let right = target;
    let boundaryIndex = undefined;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        const squared = Math.pow(midPoint, 2);
        if (squared === target) {
            // Can return immediately if found.
            return midPoint;
        } else if (squared < target) {
            boundaryIndex = midPoint;
            left = midPoint + 1;
        } else {
            right = midPoint - 1;
        }
    }
    return boundaryIndex;
}

const valuesToTest = [16, 8, 9, 70, 99, 0, 1];

valuesToTest.forEach(value => {
    console.log(`Square root estimation for ${value} is:`, squareRootEstimation(value));
});
