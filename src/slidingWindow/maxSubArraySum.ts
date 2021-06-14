// Problem statement we have to find sum of n consecutive number
// in an array whose sum is highest 


class ConsecutiveNumberSum{
    MaxSumThreeConsecutive(arr: number[], num: number): number{
        /* 
            //Poor Approach O(n2)
            if(num > arr.length) return null
            const max = -Infinity;

            // Do not loop through entire array as n consecutive 
            // number we can get might be beofre n + 1 end of array
            for(let i=0; i< arr.length - num + 1; i++ ){
                temp = 0;
                
                // get sum of three consecutive number starting from 0
                for(let j=0; j< num; j++ ){
                   temp += arr[i + j]; 
                }

                // reset max if condition fulfilled
                if(temp > max) max = temp;
            }
            return max
        */

        // better approach O(n)
        let maxSum = 0;
        let tempSum = 0;
        if(num > arr.length) return null;

        // store result of 1st 3 consecutive numver O(n)
        for(let i = 0; i< num; i++){
            maxSum += arr[i];
        }
        tempSum = maxSum;

        // start looping from index equal to n
        for(let i = num; i < arr.length ; i++){

            // sum of next 3 number must = sum of previous 3 + sum of current index - 1st index
            // of consecutive number i.e arr[i - num]
            tempSum = tempSum + arr[i] - arr[i - num];
            maxSum = tempSum > maxSum ? tempSum : maxSum;
        }
        return maxSum;
    }
}

const cns = new ConsecutiveNumberSum();
const res = cns.MaxSumThreeConsecutive([1,2,4,1,6,2,9], 3);
console.log('result is', res);