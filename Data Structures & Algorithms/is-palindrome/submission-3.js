class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let check = '';
        for (let i=cleaned.length-1; i>=0; i--) {
            check += cleaned[i]
        }
        return check == cleaned
    }
}
