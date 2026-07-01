class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const instanceTracker = {};
        for (const n of nums) {
            if (!instanceTracker[n]) {
                instanceTracker[n] = 1
            } else {
                return true
            }
        }
        return false
    }
}
