// leetcode 152 description
// 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）
// TAG: 动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let length = nums.length;
    if(length === 0) return 0;
    if(length === 1) return nums[0];
    let dp = []; //前n个数字乘积最大
    dp[0] = nums[0];
    let result = dp[0];
    for(let i = 1; i < length; i++) {
        dp[i] = Math.max(dp[i-1]*nums[i], nums[i]);
        result = Math.max(result, dp[i]);
    }
    return result;
};