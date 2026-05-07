class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const grouped = new Map();

        for (const str of strs) {
            const sorted = sortString(str);
            if (!grouped.has(sorted)) {
                grouped.set(sorted, [])
            }
            grouped.get(sorted).push(str);
        }
        return [...grouped.values()]
    }
}

function sortString(str: string): string {
    return Array.from(str).sort().join('');
}
