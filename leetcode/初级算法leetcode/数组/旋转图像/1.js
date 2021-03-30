/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let n = matrix.length;
    let matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // 对于矩阵中第 ii 行的第 jj 个元素，在旋转后，它出现在倒数第 ii 列的第 jj 个位置。
    // matrix[i][j]   =>    matrix [j][n-i-1]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix_new[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix_new[i][j];
        }
    }
};