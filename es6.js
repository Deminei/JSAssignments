//two arrays of numbers
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

//spread operator combining arrays numbers1 and numbers2
const numbers = [...numbers1, ...numbers2];

//arrow function to square a number
let square = (num) => num * num;

//map method to make new array of squares
const squares = numbers.map(square);

//arrow function to check if a number is even
let isEven = (num) => num % 2 === 0;

//filter method to make new array of even squares
const evenSquares = squares.filter(isEven);

//destructuring to extract the first and second elements of evenSquares
const [firstEvenSquare, secondEvenSquare] = evenSquares;

//template literal's to log
console.log(`numbers: ${numbers}`);
console.log(`squares: ${squares}`);
console.log(`evenSquares: ${evenSquares}`);
console.log(`Extracted even squares: first even square = ${firstEvenSquare}, second even square = ${secondEvenSquare}`);