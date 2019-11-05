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
    let result = Number.MIN_SAFE_INTEGER;
    let imax = 1;
    let imin = 1;
    for(let i = 0; i < length; i++) {
        if(nums[i] < 0) {
            [imax, imin] = [imin, imax];
        }
        imax = Math.max(imax*nums[i], nums[i]);
        imin = Math.min(imin*nums[i], nums[i]);
        result = Math.max(imax, result);
    }
    return result;
};