function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]; // Return indices
            }
        }
    }
    return []; // No solution found
}

console.log(twoSum([3, 5, 6, 1], 7)); // [0, 3]