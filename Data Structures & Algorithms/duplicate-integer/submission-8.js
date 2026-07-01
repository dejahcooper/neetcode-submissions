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
            } else if (instanceTracker[n] = 1) {
                return true
            }
        }
        return false
    }
}

