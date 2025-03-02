/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const main = s.replace(/[ ,:]/g, '').toLowerCase();
    const reverse = s.replace(/[ ,:]/g, '').split("").reverse().join("").toLowerCase()
    console.log(reverse, '=', main);
    
    if (reverse === main) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

// @lc code=end

