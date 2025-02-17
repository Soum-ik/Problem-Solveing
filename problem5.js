function findMissingPositive(nums) {
    let n = nums.length;

    // Step 1: Place numbers at their correct index
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    // Step 2: Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1; // The first missing positive number
        }
    }

    return n + 1; // If all numbers are in place, return the next positive number
}

// Example cases:
console.log(findMissingPositive([1, 2, 0]));       // Output: 3
console.log(findMissingPositive([3, 4, -1, 1]));   // Output: 2
console.log(findMissingPositive([7, 8, 9, 11, 12])); // Output: 1
