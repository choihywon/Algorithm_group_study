var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

for (let i = 1; i <= 9; i++){
    console.log("%d * %d = %d", input[0], i, parseInt(input[0])*i);
}
