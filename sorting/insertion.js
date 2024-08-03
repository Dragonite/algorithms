const input = [5, 3, 1, 2, 4];

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // Hold index for the compared item as well as current iteration item
        let comparisonIndex = i - 1;
        let currentIndex = i;
        while (comparisonIndex >= 0) {
            const currentValue = arr[currentIndex];
            const comparedValue = arr[comparisonIndex];
            if (currentValue < comparedValue) {
                arr[comparisonIndex] = currentValue;
                arr[currentIndex] = comparedValue;
            } else {
                // Stop if bigger, no point doing any more work for this iteration
                break;
            }
            comparisonIndex--;
            currentIndex--;
        }
    }
}

insertionSort(input);

console.log(input);