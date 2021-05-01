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

function calcAge1(birthYeah) {
    return 2021 - birthYeah;
}

console.log(calcAge1(1991))