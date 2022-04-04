// ASSESSMENT 2: Coding Practical Questions with Jest

//const { test, it } = require("@jest/globals")
//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
//Expected output: "-7 is not divisible by three"

// Create a test, title it divideBy3
// Explain what we want to have happen in the "it" method
// Write what we expect to have happen
// Recieve the expected failure result



describe("divideBy3", () => {
  it("logs 'is divisable by 3 ' based on yes or no input", () => {
    expect(divideBy3("yes")).toEqual("is divisable by three")
    expect(divideBy3("no")).toEqual("is not divisable by three")
  })
})
// b) Create the function that makes the test pass.

// Create a function titled divideBy3
// Input the type of data you're working with in the parameter (number)
// Using the modulo operator, find out which of the variables provided are diviable by 3 with a remainder of 0
// Return that the number is either divisable by 3 or not divisable by 3

function divideBy3(number) {
    if (num1 % 3 == 0) {
        return `${num1} is divisable by three`
    } else {
        return `${num1} is not divisable by three`
    }
}
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Create a test and title it allCaps
// Explain what we want to have happen in the "it" method (take in an array of words and returns an array with the previous words all uppercase)
// Write what we expect to happen
// Recieve the expected failure result

// b) Create the function that makes the test pass.

// Make a function and call it allCaps
// Input the data type in the paramter, in this case "strings"
// Use the .join method to turn the array into a string
// Use .toUpperCase to capitalize all the words in the string
// Use .split to return the string back to an array

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// Create a test and title it firstVowel
// Explain what we want to have happen in the "it" method (log the index of the first vowel in each variable)
// Write what we expect to happen
// Recieve the expected failure result


// b) Create the function that makes the test pass.

// Create a function titled firstVowel 
//