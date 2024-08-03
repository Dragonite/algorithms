const input = [false, false, false, false, false, true, true, true];

const firstTrue = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;
    while (left <= right) {
        const midPoint = Math.floor((left + right) / 2);
        if (arr[midPoint]) {
            // No need to do comparison here as you'll always get a smaller number for boundary index.
            boundaryIndex = midPoint;
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
    }
    return boundaryIndex;
}

const firstTrueWithoutRemoval = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left !== right) {
        const midPoint = Math.floor((left + right) / 2);
        if (arr[midPoint]) {
            // No need to do comparison here as you'll always get a smaller number for boundary index.
            right = midPoint;
        } else {
            left = midPoint + 1;
        }
    }
    return arr[left] ? left : -1;
}

console.log('With replacement:', firstTrue(input));
console.log('Without replacement', firstTrueWithoutRemoval(input));