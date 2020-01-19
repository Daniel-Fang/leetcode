// leetcode 35 description
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// TAG: 数组 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0, end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (start < end) {
        if (nums[middle] < target) {
            start = middle + 1;
        } else if (nums[middle] > target){
            end = middle - 1;
        } else {
            return middle;
        }
        middle = Math.floor((start + end) / 2);
    }

    if (nums[start] < target) {
        return start + 1;
    } else if (nums[start] > target || nums[start] === target) {
        return start;
    }
};

// 思路：通过二分查找 找出对应位置。存在，则返回。不存在，则判断插入的位置