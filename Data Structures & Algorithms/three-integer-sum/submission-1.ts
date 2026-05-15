class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sums = [];
        const sorted = [...nums].sort((a, b) => a - b);
        for (let i = 0; i < sorted.length; i++) {
            while (i > 0 && sorted[i] === sorted[i - 1]) {
                i++;
            }
            let l = i + 1, r = sorted.length - 1;
            while (l < r) {
                const sum = sorted[i] + sorted[l] + sorted[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    sums.push([sorted[i], sorted[l], sorted[r]]);
                    l++;
                    r--;

                    while (l < r && sorted[l] === sorted[l - 1])  {
                        l++;
                    }
                    while (l < r && sorted[r] === sorted[r + 1])  {
                        r--;
                    }
                }
            }
        }
        return sums;
    }
}
