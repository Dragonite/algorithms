const input = [1,1,2,3,3,4,4,8,8];

const firstElementInDoubleArray = (array) => {
    const noRemainderAndFirst = (index) => {
        if (!(index % 2) && (array[index + 1] === array[index])) {
            return false;
        }
        if ((index % 2) && (array[index + 1] && (array[index + 1] !== array[index]))) {
            return false;
        }
        return true;
    }
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (noRemainderAndFirst(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return array[left];
}

console.log(firstElementInDoubleArray(input));