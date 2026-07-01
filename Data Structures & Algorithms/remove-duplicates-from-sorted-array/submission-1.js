class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let writeIndex = 1

        for (let i=1; i<nums.length; i++) {
            if (nums[i] !== nums[i-1]) {
                nums[writeIndex] = nums[i]
                writeIndex ++
           } 
        }
        return writeIndex
    }
}