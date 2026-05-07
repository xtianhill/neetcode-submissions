class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number) {
        // left + right = target
        // left = target - right

        const diffToIdx = new Map()

        for (const [idx, num] of nums.entries()) {
            const diff = target - num;
            const otherIdx = diffToIdx.get(diff);
            if (otherIdx != null && otherIdx !== idx) {
                return [otherIdx, idx];
            }

            diffToIdx.set(num, idx);
        }

        throw new Error('invalid test case');
    }
}
