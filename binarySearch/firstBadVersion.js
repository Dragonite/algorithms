const isBadVersion = (input) => {
    if (input === 4) return true;
}

const firstBadVersion = (n) => {
    let left = 1;
    let right = n;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (isBadVersion(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
console.log(firstBadVersion(5))