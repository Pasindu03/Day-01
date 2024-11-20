interface Person {
    firstName : string,
    age : number
    hobbies : object
}

const person = {
    firstName:"Tim",
    age:30,
    hobbies: {
        sports : "Swimming"
    }
}

const {firstName, age, hobbies} = person
const {sports} = hobbies

console.log(firstName)
console.log(age)
console.log(hobbies)
console.log(sports)