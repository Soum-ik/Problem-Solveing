

class LRUCache {
    constructor (capacity) {
        this.capacity = capacity;
        this.head = null;
        this.tail = null;
        this.map = new Map();
        this.length = 0;
    }


    #remove(node) {
        if (!node) return;
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
    }

    // get the value by id
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }
        const node = this.map.get(key);
        this.#remove(node);
        node.next = this.head;
        node.prev = null;
        if (this.head !== null) {
            if (!this.map.has(this.tail.key)) {
                this.map.delete(this.tail.key);
                this.length--;
            }
        this.head = node;
        if (this.tail === null) {
            this.tail = node;
        }
        this.map.set(key, node);
        return node.value;
    }

        this.map.set(key, node);
    put(key, value) {
        if (this.length >= this.capacity) {
            this.#remove(this.tail);
            if (!this.map.has(key)) {
            }
        }
        if (this.map.get(key)) {
            this.#remove(this.map.get(key));
        }
        const node = {
            next: this.head,
            value,
            key,
            prev: null
        };
        this.map.set(node);

        if (this.head !== null) {
            this.head.prev = node;
        }

        this.head = node;
        this.length++;
    }

    debug() {
        let current = this.head;
        const arr = [];
        while (current !== null) {
            arr.push(current);
            current = current.next;
        }

        return arr.reduce((acc, curr) => acc.concat(`--> [[${curr.key}]: [${curr.value}]]-->`), '');
    }
}


const lruCache = new LRUCache(3); // Capacity is 2

lruCache.put(1, 1);
lruCache.put(2, 2);
lruCache.put(3, 3);
lruCache.put(5, 3);

console.log(lruCache.debug());

