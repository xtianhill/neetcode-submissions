class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let longest = 0;

        for (const n of nums) {
            if (seen.has(n - 1)) {
                continue;
            }
            let localMax = 0;
            let curr = n;
            while (seen.has(curr)) {
                localMax++;
                curr++;
            }
            longest = Math.max(longest, localMax);
        }
        return longest;
    }
}
