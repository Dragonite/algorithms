const minEatingSpeed = (piles, guardHours) => {
    const hoursNeededToEat = (speed) => {
        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i]/speed);
        }
        return hours;
    }
    let left = 1; // Monkey can at minimum eat 1 per hour
    let right = Math.max(...piles); // Anything higher than the maximum amount is pointless.
    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        const hours = hoursNeededToEat(mid);
        if (hours <= guardHours) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

console.log(minEatingSpeed([30,11,23,4,20], 6))