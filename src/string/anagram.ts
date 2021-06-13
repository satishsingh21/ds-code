class Anagram {
    public checkForAnagram(s1: string, s2: string): boolean{
        // check if string has differnet length
        if(s1.length !== s2.length) return false;

        // convert string into set
        const s1s= new Set(s1);
        const s2s = new Set(s2);

        // check if sting set has equal length
        if(s1s.size !== s2s.size) return false

        // check if all key in set1 is present in set 2 or not
        for(let key of s1s)
            if(s2s.has(key) === false) return false
        
        return true;
    }
}

const anagram = new Anagram();
const isAnagram1 = anagram.checkForAnagram("ANAGRAM", "NAGRAMA");
console.log('is anagram', isAnagram1);

const isAnagram2 = anagram.checkForAnagram("ANAGRAM", "NAGRAMAA");
console.log('is anagram', isAnagram2);

const isAnagram3 = anagram.checkForAnagram("ANFGRDM", "NAGRFME");
console.log('is anagram', isAnagram3);