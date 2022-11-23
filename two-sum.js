/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 
*/

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
var twoSum = function(nums, target) {
    // Initialize new Object
    const hashMap = {};
    for (let i=0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        // if diff in hashMap, return it
        if (hashMap[diff] !== undefined) {
            return [hashMap[diff], i];
        } else {
            hashMap[num] = i;
        }
    }
}