const input = [[5,7,7,8,8,10], 8];
const findNumberRange = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let leftIndex = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            leftIndex = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    left = 0;
    right = nums.length - 1;
    let rightIndex = -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            rightIndex = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [leftIndex, rightIndex];
}

console.log(findNumberRange(...input));