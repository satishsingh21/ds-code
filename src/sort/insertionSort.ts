/*
    Idea behind insertion sort is maintainting a temporary sorted array starting from 2nd position
    consdering 1st as already sorted we compare current item with previous item in array if 
    previous is greater we swap them else move on. Thus at end of each iteration we have partial
    sorted array
*/


// Time Complexity O(n2)
// For already sorted array O(n)

class InsertionSort {
    sort(arr: number[]): number[] {
        let i, currentItem, j;
        for ( i = 1; i < arr.length ; i++ ) {

            /*storing current element whose left side is checked for its 
                correct position .*/
            currentItem = arr[i];
            
            /* check whether the adjacent element in left side is greater or
                 less than the current element. */
            for(j = i - 1;j >= 0 &&  arr[j] > currentItem; j--) {

                // moving the left side element to one position forward.
                arr[j + 1] = arr[j];
            }

            // moving current element to its  correct position.
            arr[j + 1] = currentItem;
        }
        return arr;
    }
}

const insSort = new InsertionSort();
console.log(insSort.sort([8, 1, 2, 3, 4, 5, 6]))

