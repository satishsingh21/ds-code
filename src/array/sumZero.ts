// Write a function called sumZero which accepts a sorted array of integers. 
// The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.
class SumZero {
    // Time complexity O(n2)
    // brute force way

    // sumZero(arr) {
    //     for (i=0;i< arr.length;i++){
    //            for(j= i+ 1;j< arr.length; j++){
    //              if((arr[i] + arr[j] === 0) ) return [i,j]
    //            }
    //     }
    //     return undefined
    // }

    // refactor: time complexity O(n)
    sumZero(arr: number[]): number[] {
        let left_point = 0;
        if (arr[left_point] >= 0) {
            return undefined
        }
        let right_point = arr.length - 1;
        while (left_point < right_point) {
            const sum = arr[left_point] + arr[right_point];
            if (sum > 0){
                right_point--;
            } else if ( sum < 0) {
                left_point++;
            } else {
                return [arr[left_point], arr[right_point]]
            }
        }
    }
}
const sZero = new SumZero();

const resArray1 = sZero.sumZero([-3,1,0,2,3]);
console.log(resArray1);

const resArray2 = sZero.sumZero([-3,1,0,2,4]);
console.log(resArray2);