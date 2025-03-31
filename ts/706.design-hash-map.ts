class MyHashMap {
    private arr: { key: number, value: number }[]

    constructor() {
        this.arr = []
    }

    put(key: number, value: number): void {
        const data = { key, value };
        const existingIndex = this.arr.findIndex(item => item.key === key);

        if (existingIndex === -1) {
            this.arr.push(data);
        } else {
            this.arr[existingIndex].value = value;
        }

    }

    get(key: number) {
        if(this.arr === null) return
        const existingIndex = this.arr.findIndex(item => item.key === key);
        return existingIndex ? 1 : - 1
    }

    remove(key: number): void {
        const existingIndex = this.arr.findIndex(item => item.key === key);
        delete this.arr[existingIndex]
    }
}

const myHashMap = new MyHashMap();

// Put some key-value pairs
myHashMap.put(1, 1);
myHashMap.put(2, 2);

// Get the value for a key
console.log(myHashMap.get(1)); // Should print 1
console.log(myHashMap.get(3)); // Should print -1 (not found)

// Update the value for an existing key
myHashMap.put(2, 1);
console.log(myHashMap.get(2)); // Should print 1

// Remove a key
myHashMap.remove(2);
console.log(myHashMap.get(2)); // Should print -1 (not found)
