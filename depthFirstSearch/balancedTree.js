// eslint-disable-next-line no-undef
const { getTree } = require('./treeGenerator.js');

const tree = getTree('1 2 4 x 7 x x 5 x x 3 x 6 x x');

const balancedTree = (root) => {
    if (!root) return 0;
    
    const leftDepth = balancedTree(root.left);
    const rightDepth = balancedTree(root.right);

    const depth = Math.abs(leftDepth - rightDepth);

    if (leftDepth === -1 || rightDepth === -1 || depth > 1) {
        return -1
    }
    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(balancedTree(tree));