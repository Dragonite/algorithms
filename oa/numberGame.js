const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const input = [1,2,3,4,5,6];

const numberGame = (numberList) => {
    const n = numberList.length / 2;
    
    const dfs = (operation, bitmask) => {
        // 1 starting index
        if (operation > n) return 0;
        let maxScore = 0;
        for (let i = 0; i < numberList.length; i++) {
            // If it's been used
            if (bitmask & (1 << i)) {
                continue;
            }
            for (let j = i + 1; j < numberList.length; j++) {
                // If it's been used
                if (bitmask & (1 << j)) {
                    continue;
                }
                // This is the same as checking a used array.
                // If it's not used, create a new bitmap with both used
                const newBitmask = bitmask | (1 << i) | (1 << j);
                const score = operation * gcd(numberList[i], numberList[j]);
                maxScore = Math.max(maxScore, score + dfs(operation + 1, newBitmask));
                // No need to reset the bitmap because it backtracks naturally, each call has a fresh bitmap.
            }
        }
        return maxScore;
    }

    return dfs(1, 0);
}

console.log(numberGame(input));