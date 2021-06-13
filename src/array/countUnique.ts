class CountUnique {
    public countUniqueFromArray(arr: number[]): number{
        // Normal approach 1
        // const obj = {};
        // // O(n)
        // arr.forEach(item => {
        //     obj[item] = (obj[item] || 0) + 1;
        // });
        // // O(n)
        // return Object.keys(obj).length // 2n ~ n

        // Using Set
        // O(n)
        const s = new Set(arr);

        // O(1)
        return s.size; // n + 1 ~ n
    }
} 

const cunique = new CountUnique();
const cUFA = cunique.countUniqueFromArray([1,2,3,4,4,5,6,2]);
console.log('unique value is ', cUFA);
