class Solution {

    static SEP = "#";

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}${Solution.SEP}${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedStrings = []
        let left = 0;
        while (left < str.length) {
            let right = left;
            while (str[right] !== Solution.SEP) {
                right++;
            }
            const length = Number.parseInt(str.substring(left, right));
            left = right + 1;
            right = left + length;
            decodedStrings.push(str.substring(left, right));
            left = right;
        }
        return decodedStrings;
    }
}
