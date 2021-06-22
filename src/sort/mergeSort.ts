/*
    Idea behind merge sort is splitting array in form of tree using decide and conquer
    untill array size become 1. At this point we will have left and right node we can then 
    call merge function on those leaf nodes.
*/


class MergeTwoSortedArray {

    // Here time complexity O(3n) ~ O(n).
    // Also a good example of how n while loop better then nested loop.
    merge(arr1 : number[], arr2: number[]): number[]{
        
        // Initialization 
        let i = 0, j = 0, sortedArray: number[] = [];
        let l1 = arr1.length;
        let l2 = arr2.length;

        // loop until of of array exhausted
        while(i < l1 && j < l2){

            // push smallest item from the two into new array and increment counter 
            if(arr1[i] < arr2[j]) {
                sortedArray.push(arr1[i]);
                i++;
            } else {
                sortedArray.push(arr2[j]);
                j++;
            }
        }

        // check if any of the array are yet let after comparision
        // if yes append item to temporary sorted array
        while(i < l1) {
            sortedArray.push(arr1[i]);
            i++;
        }
        while(j < l2) {
            sortedArray.push(arr2[j]);
            j++;
        }

        return sortedArray;
    }

    // Here time complexity O(n log n) in all case
    mergeSort(arr: number[]): number[] {
        // return arr when array is of size 1 or
        // return arr when splitting the array return array of size 1
        if(arr.length <=1) return arr;  
        let mid = Math.floor(arr.length/2);
        let left = this.mergeSort(arr.slice(0, mid));
        let right = this.mergeSort(arr.slice(mid));
        return this.merge(left, right);
    }
}

const mtsa = new MergeTwoSortedArray();
// console.log('Merge Function [1,2,6,7],[8,9,14]');
// console.log(mtsa.merge([1,2,6,7],[8,9,14]));

console.log('Merge Sort for array [1,9,7,3,8,2]');
console.log(mtsa.mergeSort([1,9,7,3,8,2]));