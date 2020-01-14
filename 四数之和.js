/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => return a-b);
    let ans = [];
    for (let i = 0; i < nums.length - 3; i++) {
        let j = i+1;
        let k = j+1;
        let l = nums.length - 1;
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
            ans.push([nums[i], nums[j], nums[k], nums[l]]);
        } 
    }
};

fourSum([1, 0, -1, 0, -2, 2], 0);