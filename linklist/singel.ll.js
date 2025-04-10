class ListNode {    
    constructor (val) {
        this.val = val;
        this.next = null;
    } 
}

class LinkedList {
    constructor() {
        // Init the list with a 'dummy' node which makes 
        // removing a node from the beginning of list easier.
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    insertEnd(val) {
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next; 
    }

    remove(index) {
        let i = 0;
        let curr;
        curr = this.head;
        sjfaksjfk
        sadfaskfjlsajflsaf sfasfjasf saf smfsakfjasf s fsijafsa fsafjsakfa
        fsfsaklfjlaskjfs fsfsaklfjlaskjfsa 
        while(i < index && curr != null) {
            i++;
            curr = curr.next;
        }

        // Remove the node ahead of curr
        if (curr != null) {
            curr.next = curr.next.next;
        }
    }

    print() { 
        let curr = this.head.next;
        let s = "";
        while (curr != null) {
            s+= curr.val + "->";     
            curr = curr.next;
        }
        console.log(s);
    }
}

const list = new LinkedList();

// Insert elements at the end of the list
list.insertEnd(10);
// list.insertEnd(20);
// list.insertEnd(30);

// Print the list
list.print(); // Output: 10->20->30->

// Remove the element at index 1 (20 in this case)
list.remove(2);

// Print the list again
list.print(); // Output: 10->30->
