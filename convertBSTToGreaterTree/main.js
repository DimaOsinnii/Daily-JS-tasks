function  convertToGreaterTree(tree, sum = 0) {
    if(!tree) return sum;
    sum = tree.val += convertToGreaterTree(tree.right, sum);
    sum = convertToGreaterTree(tree.left, sum);
    return sum;
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}