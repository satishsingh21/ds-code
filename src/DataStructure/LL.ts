export class Node {
    value: any;
    tail: any;
    constructor(value){
        this.value = value;
        this.tail = null;
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

        // if index is of size of list
        if(index === this.length) return !!this.push(value);

        // if index point to 0th element
        if(index === 0) return !!this.unshift(value);

        let newNode = new Node(value);

        // if get previvoius node from the index 
        let prevIndexNode = this.get(index - 1);

        // swap
        let temp = prevIndexNode.next;
        prevIndexNode.next = newNode;
        newNode['next'] = temp;
        
        this.length++
        return true;
    }
}

const sll = new SingleLinkedList();
sll.push("hi");