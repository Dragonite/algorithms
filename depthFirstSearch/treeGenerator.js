class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function* tokenize(s) {
    for (let token of s.split(' ')) {
        yield token;
    }
}

function buildTree(nodes, f) {
    const val = nodes.next().value;
    if (val === "x") return null;
    const left = buildTree(nodes, f);
    const right = buildTree(nodes, f);
    return new TreeNode(f(val), left, right);
}

const getTree = (string) => {
    return buildTree(tokenize(string), val => Number(val));
}

// eslint-disable-next-line no-undef
module.exports = { getTree, TreeNode };