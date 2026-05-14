class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);

        let globalMax = 0;
        for (let n of nums) {
            let localMax = 0;

            while (seen.has(n)) {
                localMax++;
                n--;
            }

            globalMax = Math.max(globalMax, localMax);
        }

        return globalMax;
    }
}
