// Find minimum in rotated sorted array

const valuesToTest = [[30, 40, 50, 10, 20], [3, 5, 7, 11, 13, 17, 19, 2], [10, 20, 30, 40]];

const findMinimumInRotatedSortedArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        // If there's one number left, array[midPoint] and arr[arr.length - 1] point to the same number, so <=
        if (arr[midPoint] <= arr[right]) {
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
    console.log(`The index for the smallest value in [${value}] is:`, findMinimumInRotatedSortedArray(value));
});
