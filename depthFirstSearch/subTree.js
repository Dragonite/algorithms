// eslint-disable-next-line no-undef
const { getTree } = require('./treeGenerator.js');

const tree = getTree('3 4 1 x x 2 x x 5 x x');

const subTree = getTree('4 1 x x 2 x x');

const isIdenticalTree = (first, second) => {
    if (!first && !second) return true;
    if (!first || !second) return false;
    return first.val === second.val && isIdenticalTree(first.left, second.left) && isIdenticalTree(first.right, second.right)
}

const isValidSubtree = (root, subRoot) => {
    if (!root) return false;
    return isIdenticalTree(root, subRoot) || isValidSubtree(root.left, subRoot) || isValidSubtree(root.right, subRoot);
}

console.log(isValidSubtree(tree, subTree));