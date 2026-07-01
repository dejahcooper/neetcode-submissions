class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mapped = {}
        for (let num of nums) {
            if (mapped[num]) {
                return true
            } else {
                mapped[num] = 1
            }
        }
        return false
    }
}
