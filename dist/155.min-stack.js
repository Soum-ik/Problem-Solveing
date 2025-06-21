"use strict";
/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */
// @lc code=start
class MinStack {
    constructor() {
        this.stack = [];
        this.length = 0;
        // Initialize empty stacks
        this.stack = [];
        this.length = 0;
    }
    push(val) {
        this.stack.push(val);
        this.length++;
    }
    pop() {
        this.stack.pop();
    }
    top() {
        return this.stack[0];
    }
    getMin() {
        return this.stack[this.length - 1];
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
