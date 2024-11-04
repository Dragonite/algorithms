// Given four lists of integers representing prices from four different categories of items (e.g., shoes, shirts, pants, and hats), find the number of ways to choose one item from each list such that the total cost is less than or equal to a specified limit.

const shoes = [2, 1];
const hats = [2, 3];
const socks = [3, 4];
const pants = [4, 5];
const limit = 10;

const numberOfOptions = (a, b, c, d, target) => {
    // Step 1 is computing pairs of ab and cd. This reduces complexity from a*b*c*d into a much more manageable amount.
    const ab = [];
    const cd = [];
    // This part is O(a*b)
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            ab.push(a[i] + b[j]);
        }
    }
    // This part is O(c*d)
    for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < d.length; j++) {
            cd.push(c[i] + d[j]);
        }
    }
    // The reason why we don't immediately do a binary search here and insert, is because finding the position then splicing the array
    // Will work out to be O(k + logK) which will be O(k^2);
    // Let's sort with built in sort, this will give us nLogN time complexity.
    ab.sort((x, y) => x - y);
    cd.sort((x, y) => x - y);

    // Note there are duplicates here, so we could in theory reduce the amount of duplicates with a Set
    // however, by using a Set, at worst case, the space complexity here could double, e.g. no duplicates at all.
    // There is a tradeoff here, so I'm keeping the space complexity simple by just keeping duplicates, as the time
    // complexity is likely not to be affected too much unless there's a significant amount of duplicates.

    // Value for storing the count
    let count = 0;

    // Now for each value, in ab, we can do binary search on cd to see if the value is less than the target.
    for (let i = 0; i < ab.length; i++) {
        const remainder = target - ab[i];
        let left = 0;
        let right = cd.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (cd[mid] <= remainder) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        // The value of left here is now the index of how many values are <= the remainder, + 1. This is essentially the count.
        count += left;
    }
    return count;
}

console.log(numberOfOptions(shoes, hats, socks, pants, limit))