"use strict";
/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */
// @lc code=start
function reverseWords(s) {
    const reverse = s.split(" ").reverse().join(" ").trim().replace("   ", " ");
    console.log(reverse.split(""));
    console.log(reverse.split("").length);
    return reverse;
}
;
console.log(reverseWords("  Bob    Loves  Alice   "));
// @lc code=end
