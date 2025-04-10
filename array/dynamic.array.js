class DynamicArray {
    constructor () {
        this.capacity = 2;
        this.length = 0;
        this.arr = new Array(2);
    }

    // Insert n in the last position of the array
    pushback(n) {
        // TODO: Implement this method
        if (this.length >= this.capacity) {
            this.resize();
        }
        this.arr[this.length] = n;
        this.length++;


    }

    resize() {
        // TODO: Implement this method
    }

    // Remove the last element in the array
    popback() {
        // TODO: Implement this method
    }

    // Get value at i-th index
    get(i) {
        // TODO: Implement this method
        this.arr[i];
    }

    // Insert n at i-th index
    insert(i, n) {
        if (i < this.length) {
            this.arr[i] = n;
            return;
        }
        return;
        // Here we would throw an out of bounds exception  
    }

    print() {
        // TODO: Implement this method
        let s = ''
        for (let i = 0; i < array.length; i++) {
            s += this.arr[i] + @
            
        }
    }
}
