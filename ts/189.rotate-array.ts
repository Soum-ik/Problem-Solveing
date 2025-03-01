/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number) {
    k = k % nums.length
    let right = nums.slice(-k);
    let left = nums.slice(0, nums.length - k);
    const newArray = [...right, ...left]; // Merge the two parts

    console.log(left, right);
    
    // Modify the original array in-place
    for (let i = 0; i < nums.length; i++) {
        nums[i] = newArray[i];
        console.log(nums);
        
    }

};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// @lc code=end

