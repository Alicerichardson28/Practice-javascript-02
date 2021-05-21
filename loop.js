// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');

// for loop have counter // keeps running while condition is TRUE

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

// looping array

const alice= [
    'Alice',
    'Richardson',
    2021 - 1997,
    'Developer',
    ['Peter', 'Steven', 'Michael'],
    true
];

// i start from 0 because the array base of 0 is first element

// console.log(aliceArray[0])
// console.log(aliceArray[1])
// console.log(aliceArray[2])
// console.log(aliceArray[3])
// console.log(aliceArray[4])

for(let i = 0; i < alice.length; i++){
    console.log(alice[i], typeof alice[i]);
}