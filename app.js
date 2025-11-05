/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];

console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array.

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

// function addItemsToArray(newList, ...items) {
//   items.forEach((item) => {
//     newList.push(item);
//   });
//   return newList;
// }

// console.log('Exercise 2 result:', addItemsToArray(foods, 'pizza', 'cheeseburguer'));
foods.push('pizza');
foods.push('cheeseburguer');

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
//[1, 2, 3]
// 1, 2, 3
// how many elements do I want to add? 1 -> new array length is currentLength + 1;
// new array -> [0, 0, 0, 0]
/* function insertItemAtTheBeginningOfArray(array, item) {
  const newArray = [];
  newArray[0] = item;
  array.forEach((value) => {
    newArray.push(value);
  })
  return newArray;
} */
//simpler
foods.unshift('taco');
console.log('Exercise 3 result:', foods);

//console.log('Exercise 3 result:', insertItemAtTheBeginningOfArray(foods,'taco'));

//const movies = ['City of God', 'Eternal Sunshine of The Spotless Mind', 'A Dogs Will'];

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
//or ->
console.log(foods)
const findElementInArrayBasedOnIndex = (array, index) => {
  const pizza = array[index]
  return pizza;
}
const favFood = findElementInArrayBasedOnIndex(foods, 1);
// const callbackFunction = (movies, movie) => {
//    movies.push(movie)
// }
// let movies2 = [1,2,3]
// let result = movies2.forEach(callbackFunction);
// console.log(result)

console.log('Exercise 4 result:', favFood);


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)

/* const books = [];
books.push("A Man's Search For Meaning by Viktor Frankl");
books.push("Discipline and Punish by Michael Focault");
books[1] = "Looking for Alaska by John Green.";
books.push("A Song of Ice and Fire - A Game of Thrones - by George R.R Martin.");
books.forEach((book) => {
  console.log(book);
}); */

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
foods.splice(2,0,'tofu');


console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1,1,'sushi','cupcake')

console.log('Exercise 6 result:', foods);


/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
const yummy = foods.slice(1,3);


console.log('Exercise 7 result:', yummy);


/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the
   `foods` array.

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
const soyIdx = foods.indexOf('tofu');


console.log('Exercise 8 result:', soyIdx);


/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array,
   separated by ' -> '.

2) Assign the result to a variable called `allFoods`.

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
const allFoods = foods.join(' -> ')


console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
const hasSoup = foods.includes('soup');


console.log('Exercise 10 result:', hasSoup);


/* for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}


for (const element of arr) {
  console.log(element);
}


arr.forEach((element) => {
  console.log(element);
}); */


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
const isOdd = (number) => {
  return number % 2 !== 0;
}
for(number of nums) {
  if (isOdd(number)) {
    odds.push(number)
  }
}

console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array.

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
const fizz = []
const buzz = []
const fizzBuzz = []

function isEvenlyDivisible(numerator, denominator) {
  return numerator % denominator == 0;
}
console.log(nums)
for(const num of nums) {
  if(isEvenlyDivisible(num, 3) && isEvenlyDivisible(num, 5)) {
    fizz.push(num);
    buzz.push(num);
    fizzBuzz.push(num);
  } else if(isEvenlyDivisible(num, 3)) {
    fizz.push(num);
  } else if(isEvenlyDivisible(num, 5)) {
    buzz.push(num);
  } else {
    continue;
  }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzBuzz);


//const oneDArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const oneDArray = [
  1, // 0 index
  2, // 1 index
  3, // 2 index
  // and so on
]


// const twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


const twoDArray = [
  [1, 2, 3], // index 0
  [4, 5, 6], // index 1
  [7, 8, 9]  // index 2
];


// const twoDArray = [
//   [1, 2, 3], // index 0
// // 0  1  2
//   [4, 5, 6], // index 1
// // 0  1  2
//   [7, 8, 9]  // index 2
// // 0  1  2
// ];


/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays;

console.log('Exercise 13 result:', numList);


/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
const num = numArrays[2][1];


console.log('Exercise 14 result:', num);


/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within
   `numArrays` nested arrays.

2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
function getTwoDimensionalArraySum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      //access each element(array) inside the main array (eg. [[array1], [array2],... ])
      for(let j = 0; j < array[i].length; j++) {
        sum = sum + array[i][j];
      }
    }
    return sum;
}
const total = getTwoDimensionalArraySum(numArrays);

const test = getTwoDimensionalArraySum([[1],[2],[3]]);
console.log(test);
console.log('Exercise 15 result:\n', total);
