class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        const sSort = s.split('').sort().join();
        const tSort = t.split('').sort().join();
        console.log(sSort)
        console.log(tSort)
        return sSort == tSort
    }
}
