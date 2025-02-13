// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// const removeElement = function (nums, val) {
//     let k = 0; // Pointer for the next position
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i]; // Overwrite the values in nums
//             k++;
//         }
//     }
//     return k; // Return the new length
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = []
    for (let i = 0; i < nums.length; i++) {
        if (k.indexOf(nums[i]) === -1) {
            k.push(nums[i]);
        }
    }
    return k
};

console.log(removeDuplicates([1, 1, 2]));