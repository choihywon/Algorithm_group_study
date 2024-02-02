var input = require('fs').readFileSync('input.txt').toString().split('\n');

var n = parseInt(input[0]);
var dp = new Array(n);

dp[0] = 0;
dp[1] = 1;

if (n == 1){
    console.log(dp[1]);
}
else{
    for (let i = 2; i <= n; i++){
        dp[i] = BigInt(dp[i-2]) + BigInt(dp[i-1]);
    }
    console.log(BigInt(dp[n]).toString());
}
