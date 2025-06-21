/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
    }
    return false;
};
// @lc code=end

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false