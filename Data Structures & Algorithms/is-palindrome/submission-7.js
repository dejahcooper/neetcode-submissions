class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = '';
        for (let char of s) {
            if (/[a-zA-Z0-9]/.test(char)){
                cleaned += char.toLowerCase()
            }
        }
        let l = 0
        let r = cleaned.length - 1

        while (l < r) {
            if (cleaned[l] !== cleaned[r]) {
                return false
            } else {
                l ++
                r --
            }
        }
        return true
    }
}
