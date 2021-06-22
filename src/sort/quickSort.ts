/*
    Idea behind quick sort is getting  a pivot element at end of each iteration so
    that evey element to its left is smaller and to its right is bigger.
*/



class QuickSort {
    public sort(arr: number[], left = 0, right = arr.length -1): number[] {
        let pivotIndex = this.pivot(arr, left , right);
        if(left < right){
            // left
            this.sort(arr, left, pivotIndex -1);
            // right
            this.sort(arr, pivotIndex +1, right);
        }

        return arr;
    }

    // its return index of element in an array where all the element to left 
    // are smaller than this while its right are greater
    private pivot(arr: number[], start = 0, end = arr.length - 1): number{

        // assuming pivot is always first element
        let pivot: number = arr[start];
        let swapIdx: number = start;  // similat to counter

        // swap arrow function
        const swap = (arr: number[], i: number , j: number) => { 
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
         };

        // loop through array starting from 1 as o is taken by pivot
        for( let i = start + 1; i < arr.length; i++){

            // check if any element is smaller than pivot if yes incement counter
            // swap counter element with i th element
            if(pivot > arr[i]){
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }

        // at the end of loop we have got counter value means no element is left in
        // array which is smaller than pivot so swap start with swapindex
        swap(arr, start, swapIdx);
        return swapIdx
    }

    
}

const qs = new QuickSort();
console.log(qs.sort([7,45,3,6,2,4]));