// leetcode 16 description
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// TAG: 数组 双指针

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let x = 10000;
    nums.sort((a, b) => a - b);
    for (let i = 0; i<nums.length-2; i++) {
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            if ((nums[i] + nums[start] + nums[end] - target > 0)) {
                x = Math.abs(nums[i] + nums[start] + nums[end] - target) < Math.abs(x - target) ? nums[i] + nums[start] + nums[end] : x;
                end--;
            } else if ((nums[i] + nums[start] + nums[end] - target < 0)) {
                x = Math.abs(nums[i] + nums[start] + nums[end] - target) < Math.abs(x - target) ? nums[i] + nums[start] + nums[end] : x;
                start++;
            } else {
                return target;
            }
        }
    }
    return x;
};

// 思路：首先对数组进行排序 TC O(nlogn) 固定一个，一个指针指向首，一个指针指向尾。
// 判断三数之和与 target 的距离，如果更近，则给结果重新赋值。