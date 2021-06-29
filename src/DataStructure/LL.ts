export class Node {
    value: any;
    next: any;
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
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
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else { // when list is not empty

            // point tail to new node
            this.tail.next = newNode;

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
        let currentNode = this.head;
        let newTail = currentNode;

        // traverse to end of list
        while(currentNode.next){

            // update tail and current node while traversal
            newTail = currentNode;

            // current node will point next item in list while tail lag by 1 node in list 
            currentNode = currentNode.next;
        }

        // update tail with newTail
        this.tail = newTail;
        this.length--;

        // when list is empty
        if(this.length === 0){
            this.head = null;
            this.tail = null; 
        }
        return currentNode;
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

        // if index is of size of list then insert and return true
        if(index === this.length) return !!this.push(value);

        // if index point to 0th element then insert and return true
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

const sll = new SingleLinkedList();
sll.push("hi");
sll.push("hi1");
sll.push("hi2");
sll.push("hi3");
sll.push("hi4");
sll.reverse();