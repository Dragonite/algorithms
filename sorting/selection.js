const input = [2, 8, 5, 3, 9, 4, 1];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let currentMinimumIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currentMinimumIndex]) {
                currentMinimumIndex = j;
            }
        }
        const currentValue = arr[i];
        arr[i] = arr[currentMinimumIndex];
        arr[currentMinimumIndex] = currentValue;
    }
}

selectionSort(input);

console.log(input);