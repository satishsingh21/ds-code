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

        // if there was only 1 item in list
        if(this.length === 0){
            this.head = null;
            this.tail = null; 
        }
        return currentNode;
    }
}

const sll = new SingleLinkedList();
sll.push("hi");