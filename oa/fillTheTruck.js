const input = [[1,3],[2,2],[3,1]];
const size = 4;

const fillTheTruck = (boxTypes, truckSize) => {
    // Sorted based on the size of the boxes.
    boxTypes.sort((a, b) => b[1] - a[1]);
    let amountLeft = truckSize;
    let totalValue = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        if (amountLeft <= 0) {
            break;
        }
        const [amount, value] = boxTypes[i];
        const amountToUse = Math.min(amount, amountLeft);
        totalValue += amountToUse * value;
        amountLeft -= amountToUse;
    }
    return totalValue;
}

console.log(fillTheTruck(input, size));