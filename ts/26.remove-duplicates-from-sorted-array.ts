/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

function removeDuplicates(nums: number[]): number {
    let i = 0; // last quine number
    if (nums.length === 0) return 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};



// @lc code=end

