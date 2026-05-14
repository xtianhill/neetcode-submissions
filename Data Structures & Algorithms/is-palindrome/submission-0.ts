class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1;
        while (left < right) {
            while (!isAlnum(s.at(left)) && left < right) {
                left++;
            }
            while (!isAlnum(s.at(right)) && left < right) {
                right--;
            }
            if (s.at(left).toUpperCase() !== s.at(right).toUpperCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

function isAlnum(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}
