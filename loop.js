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

const types = [];

// i start from 0 because the array base of 0 is first element

// console.log(aliceArray[0])
// console.log(aliceArray[1])
// console.log(aliceArray[2])
// console.log(aliceArray[3])
// console.log(aliceArray[4])

for(let i = 0; i < alice.length; i++){
    // Reading from alice array
    console.log(alice[i], typeof alice[i]);

    // Filling types array
    // types[i] = typeof alice[i]; //types[0] = typeof alice[0]
    types.push(typeof alice[i])
}

console.log(types);

const years = [1990, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('---Only string ---')
for(let i = 0; i < alice.length; i++){
    if(typeof alice[i] !== 'string') continue;
    // this console.log will not be read if the condition true and will continue to the next iteration
    console.log(alice[i], typeof alice[i]);
}

console.log('---Break with Number ---')
for(let i = 0; i < alice.length; i++){
    if(typeof alice[i] === 'number') break;
    // this console.log will not be read if the condition true and will continue to the next iteration
    console.log(alice[i], typeof alice[i]);
}

// looping array backwards
const taylor= [
    'Taylor',
    'Richardson',
    2021 - 1997,
    'Pilot',
    ['Peter', 'Steven', 'Michael'],
    true,
    true
];

// array index start with 0 but actual length start with 1 
for(let i = taylor.length - 1; i >= 0; i--){
    console.log(i,taylor[i])
}

// create loop inside loop
// otter loop
for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-----Starting exercise ${exercise}`)

    // inner loop
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
};


// console.log('----- for loop -------')
// for(let rep = 1; rep <= 10; rep++){
//             console.log(`Lifting weights repetition ${rep}`);
//         }
    
console.log('----- While loop -------')
 // While loop

let rep = 1;
while(rep <=10) {
    console.log(`While: Lifting weights repetition ${rep}`);
    rep++;
 };

// keep rolling dice 
let dice = Math.trunc(Math.random() * 6) + 1;

//when dice is 6 the loop will never start
//if you don't need a counter you can yse while loop
    while(dice !== 6) {
        console.log(`You rolled a ${dice}`) //infinity loop
        dice = Math.trunc(Math.random() * 6) + 1;
        if(dice === 6) console.log('Loop is about to end...');
    }

    