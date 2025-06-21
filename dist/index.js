"use strict";
// £££££££££££££££££££££££££££££££££££££££££
// function createCounter(n: number): () => number {
//   let counter = n;
//   return function () {
//     return counter++;
//   }
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addTwoPromises(promise1, promise2) {
    return __awaiter(this, void 0, void 0, function* () {
        const [result1, result2] = yield Promise.all([promise1, promise2]);
        return result1 + result2;
    });
}
;
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
function sleep(millis) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, millis));
    });
}
/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// type Fn<T> = () => Promise<T>
// async function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
//   const [...res] = await Promise.all([...functions])
//   // return res 
// };
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
