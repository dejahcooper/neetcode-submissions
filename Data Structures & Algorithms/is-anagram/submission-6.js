class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const sTrack = {};
        const tTrack = {};

        for (const char of s) {
            if (!sTrack[char]) {
                sTrack[char] = 1
            } else {
                sTrack[char] += 1
            }
        }

        for (const char of t) {
            if (!tTrack[char]) {
                tTrack[char] = 1
            } else {
                tTrack[char] += 1 
            }
        }

        for (const char in sTrack) {
            if (!tTrack[char]) {
                return false
            } else {
                if (tTrack[char] !== sTrack[char]) {
                    return false
                }
            }
        }
        return true
    }
}
