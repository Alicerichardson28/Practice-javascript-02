const friend1 = 'Alice';
const friend2 = 'Taylor';
const friend3 = 'Peter';

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
console.log(friends)


// check index position, if the element not in the array will return -1
console.log(friends.indexOf('Alice'))
console.log(friends.indexOf('Bob'))