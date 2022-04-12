// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
//Expected output: "-7 is not divisible by three"


describe("divideBy3", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
    expect(divideBy3(num1)).toEqual("15 is divisible by three")
    expect(divideBy3(num2)).toEqual("0 is divisible by three")
    expect(divideBy3(num3)).toEqual("-7 is not divisible by three")
  })
})

//Output:
// FAIL  ./code-challenges.test.js
// divideBy3
//   ✕ takes a number as an argument and decides if the number is evenly divisble by three or not.

// ● divideBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not.

//   ReferenceError: divideBy3 is not defined

// b) Create the function that makes the test pass.

//  PSEUDO CODE:
 // Create a function named divideBy3 that takes in a parameter called number
// Conditionally check whether a given number is divisible by 3
 // Return IF the number is divisible by three ELSE return that it is not.

const divideBy3 = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}
//Output:
// PASS  ./code-challenges.test.js
// divideBy3
//   ✓ takes a number as an argument and decides if the number is evenly divisble by three or not. (1 ms)


// -2) Create a function that takes in an array of words and returns an array with all the words capitalized.


// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capitalizeWords", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

//Output:
// FAIL  ./code-challenges.test.js
// capitalizeWords
//   ✕ takes in an array of words and returns an array with all the words capitalized. (1 ms)

// ● capitalizeWords › takes in an array of words and returns an array with all the words capitalized.

//   ReferenceError: capitalizeWords is not defined


// b) Create the function that makes the test pass.

// Pseudo Code
// create a function called capitalizedWords
// input will be array of strings
// .map to iterate
//  capitalize the value of the first index of each word in the array
// return results
// output an array with capitalized words

const capitalizeWords = (array) => {
    let eachItem = array.map(value => value [0].toUpperCase() + value.substring(1))
    return eachItem
}

//Output:
// PASS  ./code-challenges.test.js
// capitalizeWords
//   ✓ takes in an array of words and returns an array with all the words capitalized. (2 ms)

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

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
    expect(firstVowel(vowelTester1)).toEqual(1)
    expect(firstVowel(vowelTester2)).toEqual(0)
    expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

//Output:
// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ takes in a string and logs the index of the first vowel

// ● firstVowel › takes in a string and logs the index of the first vowel

//   ReferenceError: firstVowel is not defined


// b) Create the function that makes the test pass.

// PSEUDO CODE
// - Create a function - firstVowel
// - Input: a single string
// - Search through the array for 'a','e','i','o','u'





const firstVowel = (string) => {
    return string.search(/[a,e,i,o,u,A,E,I,O,U]/)
}

//output:
// PASS  ./code-challenges.test.js
// firstVowel
//   ✓ takes in a string and logs the index of the first vowel (1 ms)
