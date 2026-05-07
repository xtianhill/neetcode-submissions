class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const grouped = new Map();
        for (const str of strs) {
            const key = getKey(str);
            if (!grouped.has(key)) {
                grouped.set(key, []);
            }
            grouped.get(key).push(str);
        }
        return [...grouped.values()];
    }
}

const a_CHAR_CODE = 'a'.charCodeAt(0);

function getKey(str: string): string {
    const counts = new Array(26).fill(0);
    for (const char of str) {
        counts[char.charCodeAt(0) - a_CHAR_CODE] += 1;
    }
    return counts.join(',');
}
