const friend1 = 'Alice';
const friend2 = 'Taylor';
const friend3 = 'Smith';
const friend4 = 'Kesinee';

// const friends = ['Alice', 'Taylor', 'Peter'];
// console.log(friends);

//  create array with array function
// const y = new Array(1991, 1989, 2008, 2021);

// console.log(friends[0]);
// console.log(friends[2]);

// length is not zero base
// console.log(friends.length);
// how to get the last element in the array
// console.log(friends[friends.length - 1])

// mutate array
// friends[2] = 'Jay';
// console.log(friends);

// can not replace the entire array
// friends = ['James', 'Tim']

// const firstName = 'Alice';
// const alice = [firstName, 'Richardson', 2021 - 1991, 'programmer', friends];
// console.log(alice);
// console.log(alice.length);

// Exercise
// const calcAge = function (birthYeah) {
//     return 2021 - birthYeah;
// }
// const years = [1991, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages)



const friends = ['Alice', 'Taylor', 'Peter'];
// push is method function to add to last element into an array and return the length of new array
const newLength = friends.push('Ken');
console.log(friends);
console.log(newLength);


// add elements in front of array and return new length of new array
friends.unshift('Brain');
console.log(friends);

// remove last elements from array, don't have to pass any element
friends.pop(); //Last
const popped = friends.pop(); 
console.log(popped)
console.log(friends)

//remove first elements in the array
friends.shift();
console.log(friends);


// check index position, if the element not in the array will return -1
console.log(friends.indexOf('Alice'));
console.log(friends.indexOf('Bob'));

// Es6 method includes return index of the element and also return true or false 
// Also is strict equality 
friends.push(23)
console.log(friends.includes('Alice'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Taylor')) {
    console.log('You have a friend called Taylor');
}


// Coding challenge #2

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals)



