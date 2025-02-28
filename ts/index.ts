// £££££££££££££££££££££££££££££££££££££££££
// function createCounter(n: number): () => number {
//   let counter = n;
//   return function () {
//     return counter++;
//   }
// }

// const counter = createCounter(10)
// console.log(counter());
// console.log(counter());
// console.log(counter());


// £££££££££££££££££££££££££££££££££££££££
// type ToBeOrNotToBe = {
//   toBe: (val: any) => boolean;
//   notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//   let prams = val;
//   return {
//     toBe(val) {
//       if (val === prams) {
//         return true
//       } else {
//         return false
//       }
//     },
//     notToBe(val) {
//       if (val !== prams) {
//         return true
//       } else {
//         throw 'Equal'
//       }
//     },
//   }
// };

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/

// ££££££££££££££££££££££££££££££££££££££

// type Counter = {
//   increment: () => number,
//   decrement: () => number,
//   reset: () => number,
// }

// function createCounter(init: number): Counter {
//   let count = init;

//   function increment() {
//     count++
//     return count
//   }
//   function decrement() {
//     count--
//     return count
//   }
//   function reset() {
//     count = init
//     return count
//   }
//   return { increment, decrement, reset }
// };

// const counter = createCounter(5)
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// ££££££££££££££££££££££££££££££££££££££


// function map(arr: number[], fn: (n: number, i: number) => number): number[] {
//   let newArr: number[] = [];
//   arr.forEach((element, index) => {
//     // Apply the transformation function to each element and its index
//     const transformedElement = fn(element, index);
//     // Store the result in the new array
//     newArr.push(transformedElement);
//   });

//   return newArr;
// }

// // Example usage
// console.log(map([1, 2, 3], function plusone(n) { return n + 1; })); // Output: [2, 3, 4]
// console.log(map([1, 2, 3], function plusI(n, i) { return n + i; })); // Output: [1, 3, 5]
// console.log(map([10, 20, 30], function constant() { return 42; })); // Output: [42, 42, 42]


///////////////////////////////////////////////

// type Fn = (n: number, i: number) => any

// function filter(arr: number[], fn: Fn): number[] {
//   const result = arr.filter((n, i) => {
//     return fn(n, i)
//   })
//   return result
// };

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }


///////////////////////////////////////////////

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let res = init;
  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};