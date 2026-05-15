class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = Number.NEGATIVE_INFINITY;
        let l = 0, r = heights.length - 1;
        while (l < r) {
            const min = Math.min(heights[l], heights[r]);
            const water = min * (r - l);
            max = Math.max(max, water);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }
        return max;
    }
}
