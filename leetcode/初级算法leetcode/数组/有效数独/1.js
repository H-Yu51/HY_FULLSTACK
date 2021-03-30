/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let box_val = new Array(9).fill(0).map(() => new Map())
    let row_val = new Array(9).fill(0).map(() => new Map())
    let col_val = new Array(9).fill(0).map(() => new Map())
    for(let i=0;i<9;i++) {
      for(let j=0;j<9;j++) {
        if(board[i][j] === '.')continue
        let num = board[i][j]
        let box_idx = Math.floor(i/3)*3 + Math.floor(j/3)
        if(box_val[box_idx].has(board[i][j]))return false
        if(row_val[i].has(board[i][j]))return false
        if(col_val[j].has(board[i][j]))return false
        box_val[box_idx].set(board[i][j],1)
        row_val[i].set(board[i][j],1)
        col_val[j].set(board[i][j],1)
      }
    }
    return true


};

console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))