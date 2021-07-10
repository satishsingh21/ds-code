class TreeNode {
    value: any;
    left: any;
    right: any;
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    root: any;
    constructor(){
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);

        // check if root exist
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                // check for duplicates
                if(value === current.value) return undefined;
                if (value < current.value) {
                    // check if left exist
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;  
                } else {
                    // check if right exist
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }


    contains(value) {
        if(this.root === null) return false;
        let current = this.root, found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;  
            } else if(value > current.value) {
                current = current.right;
            } else return true;
        }
        return false;
    }
}

const tree = new BinarySearchTree();
// tree.insert(5)
// tree.insert(56)
// tree.insert(4)
// tree.insert(23)
// tree.insert(59)
// tree.contains(56)