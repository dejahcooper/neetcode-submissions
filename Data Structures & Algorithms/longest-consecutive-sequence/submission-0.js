class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) {
            return 0;
        }

        let sorted = nums.sort((a,b) => a-b)
        let longest = 1;
        let tracker = 1;

        for (let i=0; i<nums.length-1; i++) {
            if (sorted[i] === sorted[i+1]) {
                continue;
            } 

            if (sorted[i] + 1 == sorted[i + 1]) {
                tracker++
            } else {
                longest = Math.max(longest, tracker)
                tracker = 1
            }
        }
    return (Math.max(longest, tracker))
    }
}
