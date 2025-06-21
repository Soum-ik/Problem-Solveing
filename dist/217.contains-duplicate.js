"use strict";
/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */
// @lc code=start
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        return console.log(element);
    }
}
;
// @lc code=end
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
