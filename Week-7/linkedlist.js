// Reverse a singly linked list
import Node from "./Node.js";

class LinkedList {
    #size;
    #head;

    constructor() {
        this.#size = 0;
        this.#head = null;
    }

    reverse() {
        let prev = null, next = null, current = this.#head;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.#head = prev;
    }

    add(element) {
        if (this.#head == null) {
            this.#head = new Node(element);
            this.#size++;
        } else {
            let node = new Node(element);
            let current = this.#head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
            this.#size++;
        }
    }

    printLinkedList() {
        let current = this.#head;
        while (current != null) {
            console.log('data',current.data);
            current = current.next;
        }

    }

    get size() {
        return this.#size;
    }
}

let l = new LinkedList()
console.log('size', l.size)
console.log('add', l.add('first'))
console.log('add', l.add('second'))
console.log('add', l.add('third'))
console.log('add', l.add('fourt'))
console.log('size', l.size)
l.reverse();
l.printLinkedList()