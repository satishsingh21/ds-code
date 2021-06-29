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

        // when list has 1 item
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // set previous node as tail
            this.tail = poppedNode.prev;

            // new tail to point to null
            this.tail = null;

            // set existing reference of removed node to null for garbage colection
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        // when list is empty
        if(!this.head) return undefined;

        let oldHead = this.head;

        // when list has 1 item
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // set next node as new head
            this.head = oldHead.next;

            // set new head prev as null
            this.head.prev = null;

            // set existing reference of removed node to null for garbage colection
            oldHead.next = null;
        }
        this.length--;

        return oldHead;
    }

    unshift(value){
        let newNode  = new Node(value);
        // when list is empty
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set existing  head prev to new node
            this.head.prev = newNode;

            // set new node next to existing head
            newNode['next'] = this.head;

            // set head to new node
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter, currentNode;
        // index is close to head 
        if(index <= this.length/2) {
            counter = 0;
            currentNode = this.head;
            while(counter !== index){
                counter++;
                currentNode = currentNode.next;
            }
        } else { // index is close to tail 
            counter = this.length - 1;
            currentNode = this.tail;
            while(counter !== index){
                counter--;
                currentNode = currentNode.prev;
            }  
        }
        return currentNode;
        
    }

    set(index, value){
        let foundNode = this.get(index)
        if(foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        // if index is invalid
        if(index < 0 || index > this.length) return false;

        // if index is of size of list then insert and return true
        if(index === this.length) return !!this.push(value);

        // if index point to 0th element then insert and return true
        if(index === 0) return !!this.unshift(value);

        let newNode = new Node(value);

        // Get previvoius and after node from the index 
        let beforeIndexNode = this.get(index - 1);
        let afterIndexNode = beforeIndexNode.next;

        beforeIndexNode.next = newNode;
        newNode.prev = beforeIndexNode;
        newNode.next = afterIndexNode;
        afterIndexNode.prev = newNode;
        
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
        let removedNode = this.get(index - 1);

        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next; 
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // Abobe 4 line could be replaced with beolw 2 line but that look more cleaner

        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
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