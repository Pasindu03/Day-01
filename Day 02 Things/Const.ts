interface Person {
    firstName : string,
    age : number,
    hobbies: object
}

const person : Person = {
    firstName:"Tim",
    age:30,
    hobbies : {
        sports: "Swimming"
    }
}

console.log(person)
console.log(person.age)
console.log(person.hobbies)
