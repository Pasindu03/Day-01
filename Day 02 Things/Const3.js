var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = {
    firstName: "Tim",
    age: 30,
    hobbies: {
        sports: "Swimming"
    }
};
var firstName = person.firstName, age = person.age, hobbies = person.hobbies;
var sports = hobbies.sports;
console.log(firstName);
console.log(age);
console.log(hobbies);
console.log(sports);
