// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
//console.log(cohort.split(""))

// a) Your answer: Each letter in the string will be seperated in an array by quotes.
// b) Verify and explain:['B', 'r', 'a', 'v','o', ' ', '2', '0','2', '2']



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:After declaring the variable "greeter" and assiging the sting "LEARN Student", your output should be "Hello, LEARN Student"
// b) Verify and explain: Undefined. You're missing your "return" declaration.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: Each number should be multipled by 2 and returned in a new array with the changes in place
// b) Verify and explain:Output: [ 8, 10, 12, 14, 16 ] Using .map will create and return a new array with the condition met


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: The odd numbers will be returned in a new array
// b) Verify and explain: [ 11, 13, 15 ] The .filter method will return all the numbers that pass the conditional in a new array


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:Javascript
// b) Verify and explain:the console.log is looking for the zero index within the languages key 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer:The output will show the stats of the learn student in this case, George.
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 } - The only dynamic key is this.student = name. Putting George in the variable is now declaring George as the name
