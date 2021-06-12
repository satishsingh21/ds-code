// Problem statement

/* 
    Given there is two array. We need to verify whether one array has all the square element of another array.
    Also there frequency should be same. if its match all condion return true
*/

// Thing to ask 
// Is it pre-defined which array is smaller 

// Consider array 1 smaller

class CompareArray {
    // It has time complexity on O(n2)
    // compareArrayWithSquareValue(arr1: number[], arr2: number[]): boolean {
    //     const isValid: boolean = this.isvalidForComaprision(arr1, arr2);
    //     if(!isValid) return false;
    //     // here every has O(n) and mathod indexOf() inside loop  has O(n)
    //     if(arr1.every(item => arr2.indexOf(item ** 2) >= 0)) return true;
    //     else return false;
    // }

    // It has time complexity on O(n2)
    compareArrayWithSquareValue(arr1: number[], arr2: number[]): boolean {
        const isValid: boolean = this.isvalidForComaprision(arr1, arr2);
        if(!isValid) return false;
        const objCounter1 = {};
        const objCounter2 = {};

        // O(n)
        arr1.forEach((item: number) => {
            objCounter1[item] = (objCounter1[item] || 0) + 1
        });
        // O(n)
        arr2.forEach((item: number) => {
            objCounter2[item] = (objCounter1[item] || 0) + 1
        });

        // O(n)
        for(const key in objCounter1){
            // O(1)
            if(!(Number(key) ** 2 in objCounter2)){
                return false;
            }
            return true;
        }
        // overall time-complexity 2n + n*1  = 3n ~ n

        return true;
    }

    private isvalidForComaprision(arr1: number[], arr2: number[]): boolean{
        // check if two array has same length
        if(arr1.length !== arr2.length) return false;

        // check if two array has any duplicate.  [1,2,2] && [1,4,4]
        if(this.checkForDuplicate(arr1) === false|| this.checkForDuplicate(arr2) === false) return false;

        return true;
    }

    private checkForDuplicate(arr: number[]): boolean{
        const arrLength = arr.length;
        const arrSet = new Set(arr)
        const arrSetLength = [...arrSet].length;
        if (arrLength !== arrSetLength) return false;
        return true
    }
}

const compareArray = new CompareArray();
const a = compareArray.compareArrayWithSquareValue([1,2,3], [1,4,9]);
console.log('is array cindition fulfilled ', a);

const b = compareArray.compareArrayWithSquareValue([1,2], [1,4,9]);
console.log('is array cindition fulfilled ', b);

const c = compareArray.compareArrayWithSquareValue([1,2,2], [1,4,9]);
console.log('is array cindition fulfilled ', c);

const e = compareArray.compareArrayWithSquareValue([1,2,3], [1,4,4]);
console.log('is array cindition fulfilled ', e);
