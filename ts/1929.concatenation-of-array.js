/*
 * @lc app=leetcode id=1929 lang=javascript
 *
 * [1929] Concatenation of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    return [...nums, ...nums];
};

console.log(getConcatenation([1, 2, 1]));

// @lc code=end

