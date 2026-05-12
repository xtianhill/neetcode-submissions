class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const seenByRow = new Map<number, Set<string>>();
        const seenByCol = new Map<number, Set<string>>();
        const seenBySquare = new Map<string, Set<string>>();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (!seenByRow.has(r)) {
                    seenByRow.set(r, new Set());
                }
                if (!seenByCol.has(c)) {
                    seenByCol.set(c, new Set());
                }

                const sudokuVal = board[r][c];
                
                if (sudokuVal === '.') {
                    continue;
                }


                const seenForRow = seenByRow.get(r);
                if (seenForRow.has(sudokuVal)) {
                    return false;
                }
                seenForRow.add(sudokuVal);

                const seenForCol = seenByCol.get(c);
                if (seenForCol.has(sudokuVal)) {
                    return false
                }
                seenForCol.add(sudokuVal);

                const squareKey = `${Math.floor(r / 3)}:${Math.floor(c / 3)}`;
                if (!seenBySquare.has(squareKey)) {
                    seenBySquare.set(squareKey, new Set());
                }
                const seenForSquare = seenBySquare.get(squareKey);
                if (seenForSquare.has(sudokuVal)) {
                    return false;
                }
                seenForSquare.add(sudokuVal);
            }
        }
        return true;
    }
}
