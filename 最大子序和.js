// leetcode 53 description
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// TAG: 分治 动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let length = nums.length;
    if(length === 0) return 0;
    if(length === 1) return nums[0];
    let dp = [];// 表示以i结尾的最大子序和
    dp[0] = nums[0];
    let result = dp[0];
    for(let i = 1; i < length; i++) {
        dp[i] = dp[i-1] + nums[i] > nums[i] ? dp[i-1] + nums[i] : nums[i];
        result = Math.max(result, dp[i]);
    }
    return result;
};