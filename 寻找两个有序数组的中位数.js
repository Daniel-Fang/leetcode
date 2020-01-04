// leetcode 4 description
// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。
// ETAG 数组 二分查找 分治算法
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let middle;
    let flag;
    if ((len1 + len2) % 2 === 0) {
        middle = parseInt((len1+len2)/2);
        flag = 0;
    } else {
        middle = parseInt((len1+len2)/2) + 1;
        flag = 1;
    }
    let i=0, j=0;
    let arr = [];
    while(i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }
    if (i === len1) {
        arr = arr.concat(nums2.slice(j));
    }

    if (j === len2) {
        arr = arr.concat(nums1.slice(i));
    }

    if (flag === 0) {
        return parseFloat((arr[middle-1] + arr[middle]) / 2);
    } else {
        return arr[middle-1];
    }
};