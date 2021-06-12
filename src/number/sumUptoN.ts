class SumUptoN  {

    // It has time complexity on O(n)
    // sum(n) {
    //     let sumOfN = 0;
    //     for(let i = 1; i<= n; i++){
    //         sumOfN = sumOfN + i;
    //     }
    //     return sumOfN;
    // }

    // It has time complexity on O(1)
    sum(num: number): number | string {
        const isValid: boolean = this.validateForNumber(num);
        if(!isValid) return `invaild ${num}`;
        if(isValid && (num === 1)) return num;
        return num*(num+1)/2;
    }

    private validateForNumber(num: number): boolean{
        // check for null
        if(!num) return false;

        // check if input is number
        if(typeof num !== 'number')  return false;

        return true
    }
}

const sumUptoN = new SumUptoN();

const result = sumUptoN.sum(5);
console.log('result is', result);

const result1 = sumUptoN.sum(null);
console.log('result is', result1);

