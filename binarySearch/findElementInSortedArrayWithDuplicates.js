// Find element in sorted array with duplicates

const firstInput = [[1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3];
const secondInput = [[2, 3, 5, 7, 11, 13, 17, 19], 6];

const findElementInSortedArrayWithDuplicates = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        if (arr[midPoint] === target) {
            // No need to do comparison here as you'll always get a smaller number for boundary index.
            boundaryIndex = midPoint;
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
    }
    return boundaryIndex;
}

console.log(`Input [${firstInput[0]}] with Target ${firstInput[1]}:`, findElementInSortedArrayWithDuplicates(...firstInput));
console.log(`Input [${secondInput[0]}] with Target ${secondInput[1]}:`, findElementInSortedArrayWithDuplicates(...secondInput));

