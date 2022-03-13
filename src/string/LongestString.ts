class LongestString {
    public checkForLongestString(str: string): string{
        // check if string has differnet length
        if(str.length === 0) return undefined;

        const strArray = str.split(' ');
        const len = strArray.length;
        let tempBigestString = "";
        for(let i=0; i< len; i++){
            if(tempBigestString.length < strArray[i].length) tempBigestString = strArray[i];
        }
        return tempBigestString;
    }
}

const longestString = new LongestString();
const isLongestString1 = longestString.checkForLongestString("My name is Khan and i am not a terrorist");
console.log('LongestString is ', isLongestString1);