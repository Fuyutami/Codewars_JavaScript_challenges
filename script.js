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

// function SeriesSum(n) {
//     if (n === 0) {
//         return '0.00'
//     } else {
//       let sum = 1
//       for (let i = 1; i < n; i++) {
//           sum += 1 / (i * 3 + 1)
//       }
//       return sum.toFixed(2).toString()
//     }
//   }

// console.log(SeriesSum(5))


//***********************************************************************************************************************************


// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   const combined = (s1 + s2).split('')
//   let sorted = new Array(26).fill('*')

//   for (let i = 0; i < combined.length; i++) {
//       let index = combined[i].charCodeAt(0) - 97
//     if (sorted[index] === '*') {
//         sorted[index] = combined[i]
//    }  
//   }
//   return sorted.join('').split('*').join('')
// }

// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))

//***********************************************************************************************************************************

// Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str.split(' ').map((word) => word.split('').reverse().join('')).join(' ')
// }

// console.log(reverseWords("This is an example!"))

//***********************************************************************************************************************************


// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:

// add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
// add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// function addBinary(a,b) {
//   return (a+b).toString(2)
// }

// console.log(addBinary(5, 9))

//***********************************************************************************************************************************


// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)


// function humanReadable(seconds) {
//   if (seconds > 359999) {
//     return '99:59:59'
//   } else {
//     let sec = seconds % 60
//     let min = ((seconds - sec) % 3600) / 60
//     let hour = (seconds - min * 60 - sec) / 3600
  
//     if (sec < 10 )sec = '0' + sec
//     if (min < 10 )min = '0' + min
//     if (hour < 10 )hour = '0' + hour
//     return `${hour}:${min}:${sec}`
//   }
// }


// console.log(humanReadable(359999))


//***********************************************************************************************************************************


// First non-repeating character

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// function firstNonRepeatingLetter(s) {
//   const strLower = s.toLowerCase()
//   for (let i = 0; i < s.length; i++) {
//       if (strLower.indexOf(strLower.charAt(i)) === strLower.lastIndexOf(strLower.charAt(i))) return s.charAt(i)
//   }
//   return ''
// }

// console.log(firstNonRepeatingLetter('sTreSS'))


//***********************************************************************************************************************************


// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'


// function findMissingLetter(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) return String.fromCharCode(array[i].charCodeAt(0) +1)
//   }
//   return ''
// }

// console.log(findMissingLetter(['a','b','c','d','f']))

//***********************************************************************************************************************************


// Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// function validParentheses(parens){
//   let pair = 0
//   for (let i = 0; i < parens.length; i++) {
//     if (parens.charAt(i) === '(') pair++
//     else if (parens.charAt(i) === ')') pair-- 
//     if (pair < 0) return false
//   }
//   return pair === 0
// }

// console.log(validParentheses("(())((()())())"))


//***********************************************************************************************************************************


// Sum Strings as Numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sumStrings(a,b) {
  let extent = 0, longerArr = [], shorterArr = [], diff = Math.abs(a.length - b.length), quotient = 0, tmp = 0
  if (a.length > b.length) {
    extent = a.length
    longerArr = a.split('').map(x => +x)
    shorterArr = b.split('').map(x => +x)
  } else {
    extent = b.length
    longerArr = b.split('').map(x => +x)
    shorterArr = a.split('').map(x => +x)
  }
  for (let i = extent - 1; i >= 0; i--) {
    if (i <= longerArr.length - 1 - shorterArr.length) {
      tmp = Math.floor((longerArr[i] + quotient ) / 10)
      longerArr[i] = (longerArr[i] + quotient ) % 10
      quotient = tmp
    } else {
      tmp = Math.floor((longerArr[i] + shorterArr[i - diff] + quotient ) / 10)
      longerArr[i] = (longerArr[i] + shorterArr[i - diff] + quotient ) % 10 
      quotient = tmp
    }
    if (i === 0 && quotient !== 0) longerArr.unshift(1)
  }
  return longerArr.join('').replace(/^[0]+/,'')
}

console.log(sumStrings('256', '23'))

//***********************************************************************************************************************************
