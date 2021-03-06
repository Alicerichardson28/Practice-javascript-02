const aliceArray = [
    'Alice',
    'Richardson',
    2021 - 1990,
    'Developer',
    ['Alice', 'Peter', 'Steven']
];

//object structure contain key value pairs
// use object group together different variable
 
const alice = {
    firstName: 'Alice',
    lastName: 'Richardson',
    age: 2021 - 1990,
    job: 'Developer',
    friends: ['Alice', 'Peter', 'Steven']
}

console.log(alice)

// using Dot notation // Dot is operator
console.log(alice.lastName)

// using Bracket Notation // specify key with the string
// we can put any expression in the [] bracket notation
console.log(alice['lastName'])

const nameKey = 'Name'; // repeating part of key name and store in the variable
console.log(alice['first' + nameKey])
console.log(alice['last' + nameKey])

// prompt is build in function in js, we can use with any script
// const interestedIn = prompt('What do you want to know about Alice? Choose between firstName, lastName, age, job, and friend');

// if (alice[interestedIn]) {
//     console.log(alice[interestedIn])
// } else {
//     console.log('wrong request! please choose between firstName, lastName, age, job, and friend')
// }

//Using Dot notation and bracket notation add new property to the object
// alice.location = 'Denver'
// alice['facebook'] = '@aliceFacebook'

// console.log(alice)


// const alice = {
//     firstName: 'Alice',
//     lastName: 'Richardson',
//     age: 2021 - 1990,
//     job: 'Developer',
//     friends: ['Alice', 'Peter', 'Steven']
// }

//Challenge
// "alice has 3 friends, and her best friend is called Peter"

console.log(alice.firstName + " " + "has" + " " + alice.friends.length + " " + "friends, and her best friend is called" + " " + alice.friends[1])
console.log(`${alice.firstName} has ${alice.friends.length} friends, and her best friend is called ${alice.friends[1]}`)

const peter = {
    firstName: 'Peter',
    lastName: 'Smith',
    birthYear: 1982,
    job: 'Developer',
    friends: ['Alice', 'John', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function() {
    //     // this.age = 2037 - this.birthYear;
    //     return 2037 - this.birthYear;
    // }
    
    calcAge: function () {
        // console.log(this)
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    // create own methods on our own objects
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `
    }

    
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // we can use this object to access peter object
    // this keyword will = who calling the calcAge method

    // calcAge: function() {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }

};
    peter.calcAge();
    console.log(peter.age);
    console.log(peter.getSummary());


    // console.log(peter.calcAge());
    // console.log(peter["calcAge"](1982));

    
    // const calcAge = function(birthYeah) {
    //     return 2037 - birthYear
    // }

