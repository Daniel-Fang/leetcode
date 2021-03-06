/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(m);
        dp[i][0] = 1;
    }

    for (let j = 0; j < m; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[n-1][m-1];
};

console.log(uniquePaths(7, 3));