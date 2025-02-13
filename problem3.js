const moveZeroes = function (nums) {
    const len = nums.sort();
    for (let i = 0; i < len.length; i++) {
        if (nums[i] === 0) {
            return nums.push(nums.splice(i, 1)[0]);
        }
    };
};
moveZeroes([0, 1, 0, 3, 9]);