//***********************************************************************************************************************************

// MY SOLUTIONS TO CHALLENGES FROM CODEWARS.COM

//***********************************************************************************************************************************

// Who likes it?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.
// It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes [,"Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"


// function likes(names) {
//     let msg
//     switch(names.length) {
//         case 0:
//             msg = 'no one likes this'
//         break;
//         case 1:
//             msg = `${names[0]} likes this`
//         break;
//         case 2:
//             msg = `${names[0]} and ${names[1]} like this`
//         break;
//         case 3:
//             msg = `${names[0]}, ${names[1]} and ${names[2]} like this`
//         break;
//         default:
//             msg = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//     }
//     return msg
// }

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))


//***********************************************************************************************************************************


// Exes and Ohs


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// function XO(str) {
//     let x = 0, o = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === 'x' || str.charAt(i) === 'X') {
//             x++
//         } else if (str.charAt(i) === 'o' || str.charAt(i) === 'O') {
//             o++
//         }
//     }
//     return x === o
// }

// console.log(XO("xxOo"))


//***********************************************************************************************************************************


// Sum of the first nth term of Series

// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n) {
    if (n === 0) {
        return '0.00'
    } else {
      let sum = 1
      for (let i = 1; i < n; i++) {
          sum += 1 / (i * 3 + 1)
      }
      return sum.toFixed(2).toString()
    }
  }

console.log(SeriesSum(5))

//***********************************************************************************************************************************
