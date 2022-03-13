// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
class ConsecutiveElementOfSizeNWithMaxSum {

    // refactor: time complexity O(n)
    public maxSum(arr: number[], n: number): number {
        
        let slideWindowSum = 0 ;
        for(let i=0; i< n; i++){
            slideWindowSum +=  arr[i]; 
        }
        let tempSum = 0;
        for(let j=n; j< arr.length; j++){
            tempSum = slideWindowSum + arr[j] - arr[j-n]
            if(tempSum > slideWindowSum) slideWindowSum = tempSum;
        }
        return slideWindowSum;
    }
}
const ceMaxSum = new ConsecutiveElementOfSizeNWithMaxSum();
const sum = ceMaxSum.maxSum([1,2,3,4,5,9,8,7,3,5], 4);
console.log('maximum sum of consecutive element of size n', sum);