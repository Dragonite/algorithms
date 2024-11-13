// eslint-disable-next-line no-undef
const { getTree } = require('./treeGenerator.js');

const tree = getTree('5 4 3 x x 8 x x 6 x x');

const visibleNodes = (root, maxValueSoFar) => {
    if (!root) return 0;
    
    let total = 0;
    if (root.val >= maxValueSoFar) {
        total++;
        maxValueSoFar = root.val;
    }
    const maxSoFar = root.val > maxValueSoFar ? root.val : maxValueSoFar;
    total += visibleNodes(root.left, maxSoFar);
    total += visibleNodes(root.right, maxSoFar);
    return total;
}

console.log(visibleNodes(tree, 0));