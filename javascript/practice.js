// # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
// def print_numbers_divisible_by_three
//   index = 1
//   while index <= 1000
//     if index % 3 == 0
//       puts index
//     end
//     index += 1
//   end
// end
// print_numbers_divisible_by_three

// var i = 1000;
// while (i > 0) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
//   i--;
// }


// # Write a method that accepts an array of strings and prints out every other string.
// def print_every_other_item(strings)
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       puts string
//     end
//     index += 1
//   end
// end
// print_every_other_item(["a", "b", "c", "d", "e"])

// var strings = ["a", "b", "c", "d", "e"];
// strings.forEach(function(string) {
//   console.log(string);
// });

// # Write a method that accepts an array of numbers and returns the sum.
// def compute_sum(numbers)
//   sum = 0
//   numbers.each do |number|
//     sum += number
//   end
//   return sum
// end
// puts compute_sum([2, 4, 5])

// var nums = [2, 4, 5];
// var result = 0;
// nums.forEach(function(num) {
//   result += num;
// });
// console.log(result);

// # Start with the hash: city_populations = {chi: 2700000}
// # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
// city_populations = {chi: 2700000}
// city_populations[:nyc] = 8400000
// city_populations[:sf] = 800000
// p city_populations



// # Write a method that prints out every number from 1 to 100. 
// var num = 1;
// while (num <= 100) {
//   console.log(num);
//   num++;
// }

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

// var num = 1;
// while (num <= 100) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
//   num++;
// }

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// function countFiftyFive(nums) {
//   let count = 0;
//   nums.forEach(function(num) {
//     if (num === 55) {
//       count++;
//     }
//   });
//   console.log(count);
// }

// let nums = [11, 22, 33, 55, 44, 55, 77, 98, 55]; // => 3
// countFiftyFive(nums);

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// function insertAwesomesauce(strings) {
//   let i = 0;
//   let result = [];
//   while (i < strings.length) {
//     result.push(strings[i]);
//     result.push("awesomesauce");
//     i++;
//   }
//   console.log(result);
// }

// let strings = ["a", "b", "c", "d", "e"];
// insertAwesomesauce(strings); 

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}

// var itemAmounts = {chair: 5, table: 2};
// itemAmounts.desks = 7;
// itemAmounts["desks"] = 7;

// console.log(itemAmounts);
// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}


// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.


// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].



// 1) Write a function that takes in an array of numbers and returns its sum.

// function sum(nums) {
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

// let nums = [1,2,3,4];
// console.log(sum(nums));
// 2) Write a function that takes in an array of strings and returns the smallest string.

// function smallestString(strings) {
//   let i = 1;
//   let smallest = strings[0];
//   while (i < strings.length) {
//     if (strings[i].length < smallest.length) {
//       smallest = strings[i];
//     }
//     i++;
//   }
//   return smallest;
// } 

// let strings = ["bbb", "c", "aaaaa"]; // => "c"
// console.log(smallestString(strings));

// 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

// function reverseOrder(nums) {
//   let reversedNumbers = [];
//   // nums.forEach(function(num) {
//   //   reversedNumbers.push(num);
//   // });
//   let i = nums.length - 1;
//   while (i >= 0) {
//     reversedNumbers.push(nums[i]);
//     i--;
//   }
//   return reversedNumbers;
// }

// let nums = [1,2,3,4,5];
// console.log(reverseOrder(nums));


// 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

// function wordStartWithA(words) {
//   let wordsStartWithA = [];
//   words.forEach(function(word) {
//     if (word[0] === "a") {
//       wordsStartWithA.push(word);
//     }
//   });
//   return wordsStartWithA;
// }

// let words = ["apple", "banana", "array", "hash"];
// console.log(wordStartWithA(words));
// 5) Write a function that takes in an array of strings and joins them together to make a single string separated by commas.

// function joinStrings(strings) {
//   let string = "";
//   let i = 0;
//   while (i < strings.length) {
//     string += strings[i] + ",";
//     i++;
//   }
//   return string;
// }
// let strings = ["ab", "cd", "ef"];
// console.log(joinStrings(strings));

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.
// 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.



// 9) Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10) Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// (solutions to half of the ruby problems: https://gist.github.com/peterxjang/a9a3827be5077abe008b62f6f9900d71)
// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome.
// Write a function to generate/print/store the first “n” prime numbers.
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won.




// Write JavaScript code using the setTimeout function to print 3 lines asynchronously. Use anonymous functions in your setTimeout calls. The output should do the following:
// 1. Wait 2 seconds
// 2. Print out “First task done!”
// 3. Wait another 2 seconds
// 4. Print out “Second task done!”
// 5. Wait another 2 seconds
// 6. Print out “Third task done!”
// setTimeout(function() {
//   console.log('First task done!');
// }, 2000);

// console.log('Second task done!');
// (use this code as a starting point)



// setTimeout(function() {
//   console.log('First task done!');
//   setTimeout(function() {
//     console.log('Second task done!');
//     setTimeout(function() {
//       console.log('Third task done!');
//     }, 2000);
//   }, 2000);
// }, 2000);

// new Promise((resolve)=> {
//   let loginInfo = {
//     email: "aaa@aaa.com",
//     password: "password"
//   }
//   setTimeout(()=> {console.log(loginInfo)}, 3000)
//   resolve(loginInfo);
// }).then(()=> {
//   return new Promise((resolve) => {
//     console.log('にゃん')
//   })
// })

// function loginInfo() {
//   let loginInfo = {
//     email: "aaa@aaa.com",
//     password: "password"
//   }
//   return loginInfo
// }

// async function createUser() {

// }

function myfunc() {
  return new Promise((resolve, reject) => {
    // 時間のかかる処理
    // 正常終了なら resolve を呼ぶ
    resolve(123)
    // エラーの場合
    // reject('Error!')
  })
}

myfunc()
  .then((value) => {
    console.log('fulfilled')
    console.log(value)
  })
  .catch((reason) => {
    console.log('rejected')
    console.log(reason)
  })