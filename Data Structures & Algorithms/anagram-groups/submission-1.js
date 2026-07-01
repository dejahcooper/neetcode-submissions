class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const lengthSort = {};

        for (let word of strs) {
            let sorted = word.split("").sort().join()
            if (!lengthSort[sorted]) {
                lengthSort[sorted] = [word]
            } else {
                lengthSort[sorted].push(word)
            }
        }
        
        const grouped = [];

        for (let key in lengthSort) {
            grouped.push(lengthSort[key])
        }

        return grouped
    }
}
