const input = [1, 4, 5, 7, 9, 12, 15, 18, 19, 22, 25, 29, 40, 50];

const vanillaBinarySearch = (arr, target) => {
    // Initialise pointers to start and end.
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const midPoint =  Math.floor((left + right) / 2);
        if (arr[midPoint] > target) {
            right = midPoint - 1;
        } else if (arr[midPoint] < target) {
            left = midPoint + 1;
        } else {
            return midPoint;
        }
    }
    return undefined;
}

const index = vanillaBinarySearch(input, 13);

console.log(index);
