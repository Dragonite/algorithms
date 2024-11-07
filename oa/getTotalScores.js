const ability = [6, 7, 5, 6];
const difficulty = [ 5, 6, 7, 4, 5 ];

const getTotalScores = () => {
    const sums = Array(difficulty).fill(0);
    const map = new Map();
    let maxValueSoFar = 0;
    for (let i = 0; i < difficulty.length; i++) {
        if (!i) {
            sums[i] = difficulty[i];
            maxValueSoFar = difficulty[i];
            map.set(maxValueSoFar, i);
        } else {
            sums[i] = difficulty[i] + sums[i - 1];
            if (difficulty[i] <= maxValueSoFar) {
                map.set(maxValueSoFar, i);
            } else {
                maxValueSoFar = difficulty[i];
                map.set(maxValueSoFar, i);
            }
            
        }
    }
    console.log(map);
    let currentMax = 0;
    for (let i = 0; i < maxValueSoFar; i++) {
        currentMax = map.get(i) || currentMax;
        if (!map.get(i)) {
            map.set(i, currentMax || 0);
        }
    }
    for (let i = 0; i < ability.length; i++) {
        console.log(map.get(ability[i]));
        ability[i] = map.get(ability[i]) !== undefined ? sums[map.get(ability[i])] : 0;
    }
    console.log(map);
    console.log('sums', sums)
    console.log(ability);
}

getTotalScores();