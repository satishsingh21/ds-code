class Reverse  {

    reverse(str) {
        const isValid = this.validateForString(str);
        console.log('isValid status is', isValid);
        if(!isValid) {
            console.log('Not a valid Stirng ' + str); 
            return;
        }
        if(isValid && str.length === 1) return str;
        const strArray = str.split('');
        const strLength = strArray.length;
        const swapArray = this.swap(strArray, strLength);
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
console.log(updateStr1);

const updateStr2 = reverse.reverse("");
console.log(updateStr2);

const updateStr3 = reverse.reverse("     ");
console.log(updateStr3);

const updateStr4 = reverse.reverse(null);
console.log(updateStr4);
