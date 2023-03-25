/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 当前节点 root 为空时，说明此处树的高度为 0，0 也是最小值
// 当前节点 root 的左子树和右子树都为空时，说明此处树的高度为 1，1 也是最小值
// 如果为其他情况，则说明当前节点有值，且需要分别计算其左右子树的最小深度，返回最小深度 +1，+1 表示当前节点存在有 1 个深度


var minDepth = function(root) {
  if(root == null) {
    return 0;
}
if(root.left == null && root.right == null) {
    return 1;
}
let ans = Number.MAX_SAFE_INTEGER;
if(root.left != null) {
    ans = Math.min(minDepth(root.left), ans);
}
if(root.right != null) {
    ans = Math.min(minDepth(root.right), ans);
}
return ans + 1;
};
// @lc code=end

