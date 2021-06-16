/*
    Idea behind bubble sort is start comparing first two item of array
    if one is greater swap it else chek for next. outer loop will start form i = arrlength
    while ineer form zero and reach to i - 1  in each iteration. The end result of each complete 
    iteration on outside lopp would be an array with biggest item in last.
*/


class BubbleSort {
    // optimized solution .Here noswap is useful when array is almost sorted
    // without no swap it is O(n2). but if array is almost sorted with noswap flag
    // it will be O(n) 

    sort(arr: number[]): number[]{
        let noSwap: boolean;
        for(let i = arr.length; i>0; i--){

            // here we create a flag and set it to true
            // as initial. It remember whether swap heppended or not in an specific value of i
            noSwap = true;
            for(let j= 0; j < i-1; j++){
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;

                    // reset swap flag to false as swapping is performed here
                    noSwap = false;
                }
            }

            // if noswap remained true i.e inner loop did not updated its value inside if block 
            // this tell that for specific value of i there is no swap performed. that also mean
            // that array is already sorted by this time so no need to check further.
            if(noSwap) break; 
        }
        return arr;
    }
}


const bblSort = new BubbleSort();
console.log(bblSort.sort([8,1,2,3,4,5,6]));