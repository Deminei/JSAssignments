class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
        this.family = []; // empty array for family members
    }
}
Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}

Person.prototype.toString = function () {
    return this.fullName() + ', Favorite Color: ' + this.favoriteColor + ', Favorite Number: ' + this.favoriteNumber;
}

Person.prototype.addToFamily = function (person) {
    if (person instanceof Person && !this.family.includes(person)) {
        this.family.push(person);
    }
    return this.family.length;
}

const peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
console.log(peter.fullName());
console.log(peter.toString());

const jane = new Person("Jane", "Doe", "Blue", 7, ['sushi', 'ramen']);
console.log(jane.fullName());
console.log(jane.toString());

console.log(jane.addToFamily(peter));
console.log(peter.addToFamily(jane));