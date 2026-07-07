class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphaNum(char) {
        return (
            char >= 'a' && char <= 'z' ||
            char >= 'A' && char <= 'Z' ||
            char >= '0' && char <= '9'
        )
    }

    isPalindrome(s) {
        let cleanStr = ''

        for (let char of s) {
            if (this.isAlphaNum(char)) {
                cleanStr += char.toLowerCase() 
            }
        }
        return cleanStr == cleanStr.split('').reverse().join('')
    }
}
