let readline = require("readline");
let Num = readline.queston("Enter the Number");
function harmonicNUM(Num)
{
    let HNum =1;
    for (let i = 2; i<=Num; i++)
    {
        HNum += parseFloat(1) / i;
    }
    return HNum;
}
console.log(harmonicNUM(Num).toFixed(4));