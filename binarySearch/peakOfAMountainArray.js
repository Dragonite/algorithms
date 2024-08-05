// Find minimum in rotated sorted array

const valuesToTest = [[0, 1, 2, 3, 2, 1, 0]];

const peakOfAMountainArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        // If there's one number left, array[midPoint] and arr[arr.length - 1] point to the same number, so <=
        if (arr[midPoint] > arr[midPoint + 1]) {
            // This means the array is sequential
            boundaryIndex = midPoint;
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
    }
    return boundaryIndex;
}

valuesToTest.forEach(value => {
    console.log(`The index for the peak value in [${value}] is:`, peakOfAMountainArray(value));
});
