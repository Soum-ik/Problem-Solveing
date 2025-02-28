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


