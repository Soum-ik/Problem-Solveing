const hasDuplicates = (arr) => {
    [... new Set(arr)].length !== arr.length;
};

console.log(hasDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(hasDuplicates([1, 2, 3, 3])); // true