// for better debugger
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// use strict will help debugging when you use the reserved word
// const interface = 'Audio';
// const private = 534;

// function logger() {
//     console.log('My name is Alice');
// }

// invoking / calling / running function then whatever in the function will get execute 
// logger();
// logger();
// logger();

/*parameter, variable will specific to this function only, will get define when we call the function 
// variable will present input data in this function
*/

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// actual variable value call argument
// fruitProcessor(5, 0);

// capture/ store function in to variable
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function declaration
// function calcAge1(birthYeah) {
//     return 2021 - birthYeah;
// }
// const age1 = calcAge1(1991);


// function expression you have to store function in the variable // function without the name call anonymous function
// const calcAge2 = function (birthYeah) {
//     return 2021 - birthYeah;
// }
// const age2 = calcAge2(1991);


// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYeah => 2021 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2021 - birthYeah;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Alice'));
// console.log(yearsUntilRetirement(1989, 'Taylor'));


// function calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// Reviewing Function

const calcAge = function (birthYeah){
    return 2021 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName){
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        // return will exit the function.
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Alice'));
console.log(yearsUntilRetirement(1989, 'Taylor'));