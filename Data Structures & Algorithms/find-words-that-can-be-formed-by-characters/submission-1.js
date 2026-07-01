class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        let mapped = {};

        for (let i=0; i<chars.length; i++) {
            mapped[chars[i]] = (mapped[chars[i]] || 0) + 1
        }
        
        let sum = 0
        let test = [];

        for (let word of words) {
            let tracker = {}
            let isValid = true;
            if (word.length > chars.length)
                continue;
            for (let char of word) {
                if (char in mapped) {
                    tracker[char] = (tracker[char] || 0 ) + 1
                    if (tracker[char] > mapped[char]) {
                        isValid = false;
                        break;
                    }
                } else {
                    isValid = false;
                    break;
                }
            }

            if (!isValid) {
                continue;
            }
            sum += word.length
            test.push(word)
        }
        return sum
    }
}
