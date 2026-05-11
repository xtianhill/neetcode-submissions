class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqs = new Map<number, number>();
        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }
        const buckets: number[][] = Array.from({ length: nums.length + 1 });
        for (const [num, idx] of freqs.entries()) {
            (buckets[idx] ??= []).push(num);
        }

        const result = [];
        for (let i = buckets.length - 1; i > 0; i--) {
            for (const num of buckets[i] ?? []) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
