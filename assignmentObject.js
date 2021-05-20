// Coding Challenge #3

const markObject = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2).toFixed(2)
        return this.bmi
    }
}

const johnObject = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2).toFixed(2)
        return this.bmi
    }
}

if(markObject.calcBMI() > johnObject.calcBMI()){
    console.log(`${markObject.fullName}'s BMI ${markObject.bmi} is higher than ${johnObject.fullName}'s ${johnObject.bmi}`)
} else {
    console.log(`${johnObject.fullName}'s BMI ${johnObject.bmi} is higher than ${markObject.fullName}'s ${markObject.bmi}`)
}

if(markObject.bmi > johnObject.bmi){
    console.log(`${markObject.fullName}'s BMI (${markObject.bmi}) is higher than ${johnObject.fullName}'s (${johnObject.bmi})`)
} else {
    console.log(`${johnObject.fullName}'s BMI (${johnObject.bmi}) is higher than ${markObject.fullName}'s (${markObject.bmi})`)
}


// Question can we use ternary operator for this statement
//  const result = markObject.bmi > johnObject.bmi 
//     ? 
//     console.log(`${markObject.fullName}'s BMI (${markObject.bmi}) is higher than ${johnObject.fullName}'s (${johnObject.bmi})`)
//     :
//     console.log(`${johnObject.fullName}'s BMI (${johnObject.bmi}) is higher than ${markObject.fullName}'s (${markObject.bmi})`)


markObject.calcBMI()
console.log(markObject.calcBMI())
console.log(johnObject.calcBMI())

