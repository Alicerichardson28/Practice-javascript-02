
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const totalOfBills = () => {
//     for(let i = 0; i < bills.length; i++){
//         tips.push(calcTip(bills[i]))
//         for(let i = 0; i < tips.length; i ++){
//             totals.push(calcTip(bills[i]) + bills[i])
//         }
//     }  
//     return totals
// }

// totalOfBills()

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip + bills[i])
}  




const calcAverage = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
    }
    console.log(sum)
}

calcAverage([2,3,4]);

