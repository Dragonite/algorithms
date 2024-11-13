// eslint-disable-next-line no-undef
const { getTree } = require('./treeGenerator.js');

const tree = getTree('1 2 4 x x 5 x x 3 x x');

const maxDepth = (root) => {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(maxDepth(tree));