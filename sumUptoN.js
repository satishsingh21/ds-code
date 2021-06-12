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
    sum(n) {
        return n*(n+1)/2;
    }
}

const sumUptoN = new SumUptoN();
const result = sumUptoN.sum(5);
console.log(result);
