class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = {};
        
        for (let num of nums) {
            if (!frequency[num]) {
                frequency[num] = 1
            } else {
                frequency[num] += 1
            }
        }
        const freqArray = Object.entries(frequency)

        freqArray.sort((a,b) => b[1]-a[1])

        const results = freqArray.slice(0,k).map(entry => entry[0]);

        return results
        
    }
}