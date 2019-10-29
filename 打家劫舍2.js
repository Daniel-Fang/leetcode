// leetcode 213 description
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
// 这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额
// TAG: 动态规划

/**
 * @param {number[]} nums
 * @return {number}
 * 这里两个的时候，收尾不算相连
 * 分为无第一个和无最后一个
 */
var rob = function(nums) {
    let length = nums.length;
    if(length === 0) return 0;
    if(length === 1) return nums[0];
    if(length === 2) return Math.max(nums[0], nums[1]);
    let nums1 = nums.slice(1);
    let nums2 = nums.slice(0, length-1);
    return Math.max(robber(nums1), robber(nums2));
};

var robber = function(nums) {
    let length = nums.length;
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < length; i++) {
        dp[i] = Math.max((nums[i]+dp[i-2]), dp[i-1]);
    }
    return dp[length-1];
};