const input = [2, 8, 5, 3, 9, 4, 1];

const bubbleSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            const firstItem = arr[j];
            const secondItem = arr[j + 1];
            if (firstItem > secondItem) {
                arr[j + 1] = firstItem;
                arr[j] = secondItem;
            }
        }
    }
}

bubbleSort(input);

console.log(input);