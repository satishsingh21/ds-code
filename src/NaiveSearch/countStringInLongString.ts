// Problem stsatement
/*
    We have a long srting and we need to find now of time a substring repeadted 
    in the bigger srting for example "ajdhflol fkekclolhrhlol" , "lol" . Here in this example 
    lol repeated 3 times.

    https://www.youtube.com/watch?v=d9dA1dnoE3E&ab_channel=LOGANFORDAcademy
    Time 52 min
*/

class NaiveSearch {
    search(long: string, short: string): number {
        // set count to zero
        let count = 0;

        // similar logic as silding window . ie no need to go to the end
        // of string as pattern can be found only for index less than
        // long.length - short.length + 1
        for(let i=0; i < long.length - short.length + 1; i++){
            for(let j=0; j< short.length; j++){

                // Here we are not checking each and every character in inner string with outer 
                // string first , second and so on character.
                // It is very much optimized i.e keeping outer index same if we found match
                // in outer sting we update long string to long[i+j] to check for next character match
                // within ineer loop only and check  match else brak the loop
                if(short[j] !== long[i+j]) break;

                // j will reach to end of lop only when it complete match
                if(j === short.length - 1) count++;
            }
        }
        return count;
    }   
}

const ns = new NaiveSearch()
const count = ns.search("xyzlol pqrlol abclol", "lol");
console.log(count);
