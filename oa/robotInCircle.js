const input = 'GGLLGG';
// Logic is that for a robot moving, if it's always moving in its original direction, it will
// get further and further away, if it doesn't finish on its original tile. If it finishes on
// original tile, it is correct anyway. In the case it doesn't, if it's facing south, after the
// next set of moves, it'll face north again and the distance it travels is cancelled out. That
// means it takes two rotations to get back to the origin. For east/west, it'll take 4 rotations
// as it's essentially doing a full turn. That means we only need to simulate the entire game once
// and depending on the direction or location after 1 simulation, we know if it'll come back.
// This should be O(n) time complexity where n is the length. The space complexity will just be O(1).
const isRobotBounded = (instructions) => {
    // Let's simulate the robot once.
    let x = 0;
    let y = 0;
    // North
    let dx = 0;
    let dy = 1;

    let temp = 0;
    for (let i = 0; i < instructions.length; i++) {
        const instruction = instructions[i];
        switch(instruction) {
            case 'G':
                x = x + dx;
                y = y + dy;
                break;
            case 'R':
                temp = dx;
                dx = dy;
                dy = -temp;
                break;
            default:
                temp = dx;
                dx = -dy;
                dy = temp;
        }
    }
    return (x === 0 && y === 0) || !(dx === 0 && dy === 1);
};

console.log(isRobotBounded(input));