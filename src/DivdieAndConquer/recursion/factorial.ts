class Factorial {
    recursion(num: number): number {
        if(num === 1) return 1;

        // recursion function stop when recursion function 
        // recursion(num - 1) resolved to a number. For us when num become 1
        // it will be resolved until then it keep on recursing
        // for this example 5 * recursion(4), 5 * 4 * recursion(3), 5 * 4 * 3 recursion(2) and so on

        return num * this.recursion(num - 1);
    }
}

const fact = new Factorial();
const resultFact = fact.recursion(5);
console.log('result is ', resultFact)