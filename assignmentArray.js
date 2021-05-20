const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

// Test 1
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Nobody win!')
    }
} 

checkWinner(scoreDolphins, scoreKoalas);
// the checkWinner is independent, we can get value from anyway
checkWinner(576, 111);

// test 2
scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas);
