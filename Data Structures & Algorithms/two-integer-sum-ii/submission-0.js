class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0, right = numbers.length - 1;
        while (left < right) {
            const sum = numbers[left] + numbers[right];
            switch (true) {
                case sum === target:
                    return [left + 1, right + 1];
                case sum > target:
                    right--;
                    break;
                case sum < target:
                    left++;
                    break;
                default:
                    throw new Error('unhandled');
            }
            // if (sum === target) {
            //     return [left, right];
            // } else if ()
        }
        throw new Error('invalid');
    }
}
