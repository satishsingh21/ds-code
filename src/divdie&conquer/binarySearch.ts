// Search for element in an sorted aaary

class BinarySearch {
    
    // Time complexity O(log n)
    search(arr: number[], itemToSearch: number): number{
        let headIndex = 0;
        let tailIndex = arr.length -1;

        // iterate over loop untill head index is less than tail index
        while(headIndex < tailIndex){

            // get middle item index
            let midItemIndex = Math.floor((headIndex + tailIndex) / 2);

            // if middle item in sorted array is lesser than given value
            // update headindex  with index just after middleindex
            if(arr[midItemIndex] < itemToSearch) headIndex = midItemIndex + 1;

            // if middle item in sorted array is greater than given value
            // update headindex  with index just before middleindex
            else if(arr[midItemIndex] > itemToSearch) tailIndex = midItemIndex - 1;

            // element found at mid position itself
            else  return midItemIndex;
        }
        return -1;
    }
}

const bs = new BinarySearch();
const index = bs.search([1,2,3,4,5,6,7,8], 7);
console.log('element found at index ', index);