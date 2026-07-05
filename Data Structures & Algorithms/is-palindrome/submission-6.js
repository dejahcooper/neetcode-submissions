class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.replace(/[^a-zA-Z0-9]/g, "").length - 1

        while (l < r) {
            if (s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()[l] 
            !== 
            s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()[r]) {
                return false
            } else {
                l++
                r--
            }
        }
        return true
    }
}
