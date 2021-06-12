class Reverse  {

    reverse(str) {
        const isValid = this.validateForString(str);
        if(!isValid) return `invaild ${str}`;
        if(isValid && str.length === 1) return `invaild ${str}`;
        const strArray = str.split('');
        const swapArray = this.swap(strArray, strArray.length);
        return swapArray.join('');
    }

    swap(arr, length) {
        // run loop by array-length/2 time
        for(let i=0;i<(length/2);i++){
            const temp = arr[i];
            arr[i] = arr[length-i-1];
            arr[length-i-1] = temp;
        }
        return arr;
    }

    validateForString(str){
        // check for null
        if(!str) return false;

        // check if input is string
        if(typeof str !== 'string')  return false;

        // check if input is string is empty
        if(str.length === 0)  return false;

        // check if all item is array is space only
        if(str.split('').every(item => item === ' '))  return false;

        return true

    }
}

const reverse = new Reverse();
const updateStr1 = reverse.reverse("Hello");
console.log('updated string is ', updateStr1);

const updateStr2 = reverse.reverse("");
console.log('updated string is ', updateStr2);

const updateStr3 = reverse.reverse("     ");
console.log('updated string is ', updateStr3);

const updateStr4 = reverse.reverse(null);
console.log('updated string is ', updateStr4);
