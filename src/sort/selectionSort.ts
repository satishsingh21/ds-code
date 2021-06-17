/*
    Idea behind selection sort is maintainting a temp varible saying it's lowest 
    while looping if we get new minimum we set temp varinle as new min else chek for next. 
    outer loop will start form i = 0, while ineer form zero and reach to i + 1  in each iteration. 
    The end result of each complete iteration on outside lopp would be an array with
    sammlest item in first position.
*/


class SelectionSort {
    sort(arr: number[]): number[]{
        for(let i = 0; i< arr.length; i++){

            // here we create a temp varible and set it to i as index of smallest selected element
            let minIndex = i;
            for(let j= i + 1; j < arr.length; j++){

                // update minIdex if we find any value smaller than selected element
                if(arr[minIndex] > arr[j]) minIndex = j;
            }

            // if min index we got in not equal to the i value
            // we swap a[i] element with a[minIndex] element
            if(minIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        return arr;
    }
}


const slcSort = new SelectionSort();
console.log(slcSort.sort([8,1,2,3,4,5,6]))

