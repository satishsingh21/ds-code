export class Node {
    value: any;
    next: any;
    prev: any;
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    head: any;
    tail: any;
    length: number;
    constructor(){
        this.head = null;
        this.tail = null;
        this.length  = 0;
    }

    push(value){
        const newNode = new Node(value);

        // when list is empty
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else { // when list is not empty

            // point tail to new node
            this.tail.next = newNode;

            // point back newnode prev to old tail
            newNode.prev = this.tail;
            // set new node as our tail
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        // when list is empty
        if(!this.head) return undefined;

         // when list is not empty
         // point temporary tail and currentNode to head
        let poppedNode = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        // when list is empty
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        // when list is empty
        if(this.length === 0){
            this.tail = null; 
        }
        return currentHead;
    }

    unshift(value){
        let newNode  = new Node(value);
        // when list is empty
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode['next'] = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(index, value){
        let foundNode = this.get(index)
        if( foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        // if index is invalid
        if(index < 0 || index > this.length) return false;

        // if index is of size of list
        if(index === this.length) return !!this.push(value);

        // if index point to 0th element
        if(index === 0) return !!this.unshift(value);

        let newNode = new Node(value);

        // Get previvoius node from the index 
        let prevIndexNode = this.get(index - 1);

        // swap
        let temp = prevIndexNode.next;
        prevIndexNode.next = newNode;
        newNode['next'] = temp;
        
        this.length++
        return true;
    }

    remove(index){
        // if index is invalid
        if(index < 0 || index >= this.length) return false;

        // if index point to 0th element
        if(index === 0) return !!this.shift();

        // if index point to last element
        if(index === this.length - 1) return !!this.pop();

        // Get previvoius node from the index 
        let prevIndexNode = this.get(index - 1);

        let removed = prevIndexNode.next;
        prevIndexNode.next = removed.next;
        
        this.length--;
        return removed;
    }

    reverse(){
        // swap head and tail
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        // define temporary prev and next
        let next;
        let prev = null

        for(let i = 0; i < this.length; i++ ) {
            // get next node
            next  = currentNode.next;

            // point current node to prev 
            currentNode.next = prev;

            // update prev to current node
            prev = currentNode;

            // update currentNode to point to next
            currentNode = next;
        }
        return this;
    }
}

const dll = new DoublyLinkedList();
dll.push("hi");
dll.push("hi1");
dll.push("hi2");
dll.push("hi3");
dll.push("hi4");
dll.reverse();