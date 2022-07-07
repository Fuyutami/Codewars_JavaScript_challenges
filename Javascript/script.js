//***********************************************************************************************************************************

// MY SOLUTIONS TO CHALLENGES FROM CODEWARS.COM
// LATEST at the TOP

//***********************************************************************************************************************************



// Roman Numeral Helper

// Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Examples
// RomanNumerals.toRoman(1000); // should return 'M'
// RomanNumerals.fromRoman('M'); // should return 1000

const RomanNumerals = {
    translation: {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    },
  
    toRoman(input) {
        let tmp, output = ''
        for (const value of Object.values(this.translation)) {
            tmp = Math.floor(input / value)
            for (let i = 0; i < tmp; i++) {
                output += Object.keys(this.translation).find(key => this.translation[key] === value)
                input -= value
            }
        }
        return output
    },
  
    fromRoman(input) {
        let tmp=0, output=0
        for (let i = 0; i < input.length; i++) {
            const current = this.translation[input[i]]
            const next = this.translation[input[i+1]]
            tmp += current
            if(next) {
              if (current === next) continue
              else if (current < next) {
                output += (next - tmp)
                i++
                tmp = 0
              }
              else if (current > next) {
                  output += tmp
                  tmp = 0
              }
            } else {
                output += tmp
            }
        }
        return output
    }
  }
  
  console.log(RomanNumerals.toRoman(1000))
  console.log(RomanNumerals.fromRoman('M'))
  
  //***********************************************************************************************************************************
  
  
  // Most frequently used words in a text
  
  // Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
  
  // Assumptions:
  // A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
  // Matches should be case-insensitive, and the words in the result should be lowercased.
  // Ties may be broken arbitrarily.
  // If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
  // Examples:
  // top_3_words("In a village of La Mancha, the name of which I have no desire to call to
  // mind, there lived not long since one of those gentlemen that keep a lance
  // in the lance-rack, an old buckler, a lean hack, and a greyhound for
  // coursing. An olla of rather more beef than mutton, a salad on most
  // nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  // on Sundays, made away with three-quarters of his income.")
  // # => ["a", "of", "on"]
  
  // top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
  // # => ["e", "ddd", "aa"]
  
  // top_3_words("  //wont won't won't")
  // # => ["won't", "wont"]
  
  
  // function topThreeWords(text) {
  //   const words = text.replace(/[\n!"#$%&()*+,-./:;<=>?@\]\[^_`{|}~]/g,'').toLowerCase().split(' ').sort()
  //   let uniqueWords = []
  //   let counter = 1
  
  //   for (let i = 0; i < words.length; i++) {
  //       if (words[i] === '' || words[i] === "'") continue
  //       else if (words[i] === words[i + 1]) counter++
  //       else  {
  //           uniqueWords.push([words[i], counter])
  //           counter = 1
  //       }  
  //   }
  //   return uniqueWords.sort((a, b) => b[1] - a[1]).map(x => x[0]).slice(0, 3)
  // }
  
  
  // console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
  
  //***********************************************************************************************************************************
  
  
  
  // Chinese Numeral Encoder
  
  // Create a function that takes a Number as its argument and returns a Chinese numeral string. You don't need to validate the input argument, it will always be a Number in the range [-99999.999, 99999.999], rounded to 8 decimal places.
  
  // Simplified Chinese numerals have characters representing each number from 0 to 9 and additional numbers representing larger numbers like 10, 100, 1000, and 10000.
  
  // 0 líng 零
  // 1 yī 一
  // 2 èr 二
  // 3 sān 三
  // 4 sì 四
  // 5 wǔ 五
  // 6 liù 六
  // 7 qī 七
  // 8 bā 八
  // 9 jiǔ 九
  // 10 shí 十
  // 100 bǎi 百
  // 1000 qiān 千
  // 10000 wàn 万
  // Multiple-digit numbers are constructed by first the digit value (1 to 9) and then the place multiplier (such as 10, 100, 1000), starting with the most significant digit. A special case is made for 10 - 19 where the leading digit value (yī 一) is dropped. Note that this special case is only made for the actual values 10 - 19, not any larger values.
  
  // 10 十
  // 11 十一
  // 18 十八
  // 21 二十一
  // 110 一百一十
  // 123 一百二十三
  // 24681 二万四千六百八十一
  // Trailing zeros are omitted, but interior zeros are grouped together and indicated by a single 零 character without giving the place multiplier.
  
  // 10 十
  // 20 二十
  // 104 一百零四
  // 1004 一千零四
  // 10004 一万零四
  // 10000 一万
  // Decimal numbers are constructed by first writing the whole number part, and then inserting a point (diǎn 点), followed by the decimal portion. The decimal portion is expressed using only the digits 0 to 9, without any positional characters and without grouping zeros.
  
  // 0.1 零点一
  // 123.45 一百二十三点四五
  // Negative numbers are the same as other numbers, but add a 负 (fù) before the number.
  
  
  // function toChineseNumeral(num) {
  //   var numerals = {
  //     '-': '负',
  //     '.': '点',
  //     0: '零',
  //     1: '一',
  //     2: '二',
  //     3: '三',
  //     4: '四',
  //     5: '五',
  //     6: '六',
  //     7: '七',
  //     8: '八',
  //     9: '九',
  //     10: '十',
  //     100: '百',
  //     1000: '千',
  //     10000: '万',
  //   }
  
  //   const negative = num < 0
  //   let whole = String(Math.abs(Math.trunc(num)))
  //   let decimal = num % 1 !== 0 ? String(num).split('.')[1] : ''
  
  //   // if negative number add sign
  //   let output = negative ? numerals['-'] : ''
  
  //   // add whole part
  //   if (+whole === 0) output += numerals['0']
  //   else if (+whole === 10) output += numerals['10']
  //   else if (+whole > 10 && +whole < 20) {
  //     output += numerals['10'] + numerals[String(whole)[1]]
  //   } else {
  //     for (let i = whole.length; i >= 1; i--) {
  //       let multiplier = numerals[String(Math.pow(10, i - 1))]
  //       if (whole[whole.length - i] === '0') {
  //         output += numerals['0']
  //         continue
  //       }
  //       if (i === 1) multiplier = ''
  //       output += numerals[String(whole[whole.length - i])] + multiplier
  //     }
  //     // remove repeating zeros i a whole part
  //     output = output
  //       .split(numerals['0'])
  //       .filter((x) => x.length > 0)
  //       .join(numerals['0'])
  //   }
  
  //   // add decimal part if needed
  //   if (decimal) {
  //     output += numerals['.']
  //     for (let i = 0; i < decimal.length; i++) {
  //       output += numerals[decimal[i]]
  //     }
  //   }
  
  //   // remove trailing zeros
  //   const regex = new RegExp(`${numerals['0']}+$`)
  //   output = output.replace(regex, '')
  
  //   return output
  // }
  
  
  // console.log(toChineseNumeral(123.45))
  
  //***********************************************************************************************************************************
  
  
  // Poker cards encoder/decoder
  
  
  // Consider a deck of 52 cards, which are represented by a string containing their suit and face value.
  
  // Your task is to write two functions encode and decode that translate an array of cards to/from an array of integer codes.
  
  // function encode :
  
  // input : array of strings (symbols)
  
  // output : array of integers (codes) sorted in ascending order
  
  // function decode :
  
  // input : array of integers (codes)
  
  // output : array of strings (symbols) sorted by code values
  
  // ['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
  // [0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
  // The returned array must be sorted from lowest to highest priority (value or precedence order, see below).
  
  
  // const translation = ['Ac', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', 'Tc', 'Jc', 'Qc', 'Kc',
  //                      'Ad', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd', 'Qd', 'Kd',
  //                      'Ah', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', 'Th', 'Jh', 'Qh', 'Kh',
  //                      'As', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', 'Ts', 'Js', 'Qs', 'Ks']
  
  // function encode (input) {
  //     return input.map(x => translation.indexOf(x)).sort((a, b) => a - b)
  //   }
    
  //   function decode (input) {
  //     return input.sort((a,b) => a - b).map(x => translation[x])
  //   }
  
  //   console.log(encode(['Ac', 'Ks', '5h', 'Td', '3c']))
  //   console.log(decode([0, 51, 30, 22, 2]))
  
  //***********************************************************************************************************************************
  
  
  // Removing Internal Vertices
  
  // Removing Internal Vertices
  // A two dimensional mesh can be defined by a list of triangles. These triangles are references (by index) to vertices; positions in 2D space.
  
  // Here is such a mesh:
  
  
  // Task
  // For this task, you will be given only the triangles of a mesh as input. This will be a list of items each containing 3 integers (C#: ValueTuples, JavaScript: Array, Python: tuples), where each of the 3 integers is the index of a vertex in the mesh. From this data alone, you must return a list only containing points along the outline of the mesh - any vertex inside the mesh must be removed:
  
  
  // The red vertices should be removed, while the green ones should be kept. Thus, the correct output would be:
  
  // {0, 1, 2, 5, 6, 9, 10}
  
  // Notes
  // A vertex is considered external if it would lie on the edge of the silhouette of the mesh, so if there is a hole in the middle of the mesh, any vertices around that hole are also considered external.
  
  // The output should be sorted in ascending order
  
  // The mesh given in the input can always be arranged without triangles intersecting each other
  
  // You will never be given an invalid input
  
  
  // const removeInternal = (...triangles) => {
  //   let vectors = []
  //    triangles.forEach(triangle => vectors.push([triangle[0], triangle[1]], [triangle[0], triangle[2]],[triangle[1], triangle[2]]))
  //    vectors.forEach(vector => vector.sort((a, b) => a - b))
  //    vectors = (vectors.map(x => x.join('-')))
  //    vectors = vectors.filter(x => vectors.indexOf(x) === vectors.lastIndexOf(x))
  //    return  [...new Set([].concat.apply([], vectors.map(x => x.split('-'))).map(x => +x))].sort((a, b) => a - b)
  // }
  
  
  // console.log(removeInternal([0, 2, 1], [3, 2, 1], [4, 2, 3], [0, 2, 4]))
  
  
  //***********************************************************************************************************************************
  
  
  // Strip Comments
  
  // Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.
  
  // Example:
  
  // Given an input string of:
  
  // apples, pears # and bananas
  // grapes
  // bananas !apples
  // The output expected would be:
  
  // apples, pears
  // grapes
  // bananas
  // The code would be called like so:
  
  // var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  // result should == "apples, pears\ngrapes\nbananas"
  
  // function solution(input, markers) {
    
  //   const lines = input.split('\n')
    
  //   for (let i = 0; i < lines.length; i++) {
  //         for (let j = 0; j < markers.length; j++) {
  //             const marker = lines[i].indexOf(markers[j])
  //             if (marker + 1) lines[i] = lines[i].slice(0, marker).trim()
  //         }
  //   }
  //   return lines.join('\n')
  // };
  
  // console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
  
  //***********************************************************************************************************************************
  
  
  
  // Perimeter of squares in a rectangle
  
  // The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
  
  // Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:
  
  // Hint:
  // See Fibonacci sequence
  
  // Ref:
  // http://oeis.org/A000045
  
  // The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
  
  // perimeter(5)  should return 80
  // perimeter(7)  should return 216
  
  // function perimeter(n) {
  //   let sides = []
    
  //   if (n > -2) sides.push(0)
  //   if (n > -1) sides.push(1)
  //   for (let i = 2; i <= n + 1; i++) sides.push(sides[i - 1] + sides[i - 2])
  //   return (sides.reduce((a, b) => a + b)) * 4
  // }
  
  // console.log(perimeter(7))
  
  //***********************************************************************************************************************************
  
  
  
  // Next bigger number with the same digits
  
  // Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
  
  // 12 ==> 21
  // 513 ==> 531
  // 2017 ==> 2071
  // nextBigger(num: 12)   // returns 21
  // nextBigger(num: 513)  // returns 531
  // nextBigger(num: 2017) // returns 2071
  // If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
  
  // 9 ==> -1
  // 111 ==> -1
  // 531 ==> -1
  // nextBigger(num: 9)   // returns nil
  // nextBigger(num: 111) // returns nil
  // nextBigger(num: 531) // returns nil
  
  // function nextBigger(n) {
  //   let digits = n.toString().split('').map((x) => +x)
  //   let firstSwapIndex = 0
  //   let secondSwapIndex = 0
  //   let found = false
  //   let counter = 1
  
  //   while (digits.length >= counter && !found) {
  //     for (let i = digits.length - counter + 1; i <= digits.length; i++) {
  //       if (digits[digits.length - counter] - digits[i] < 0) {
  //         found = true
  //         firstSwapIndex = digits.length - counter
  //         secondSwapIndex = i
  //       }
  //     } counter++
  //   }
  //   if (firstSwapIndex !== secondSwapIndex) {
  //     let tmp = digits[firstSwapIndex]
  //     digits[firstSwapIndex] = digits[secondSwapIndex]
  //     digits[secondSwapIndex] = tmp
  //     digits = digits.slice(0, firstSwapIndex + 1).concat(digits.slice(firstSwapIndex + 1).sort((a, b) => a - b))
  //     return +digits.join('')
  //   } else {
  //     return -1
  //   }
  // }
  
  // console.log(nextBigger(2017))
  
  //***********************************************************************************************************************************
  
  
  // Snail
  
  // Snail Sort
  // Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
  
  // array = [[1,2,3],
  //          [4,5,6],
  //          [7,8,9]]
  // snail(array) #=> [1,2,3,6,9,8,7,4,5]
  // For better understanding, please follow the numbers of the next array consecutively:
  
  // array = [[1,2,3],
  //          [8,9,4],
  //          [7,6,5]]
  // snail(array) #=> [1,2,3,4,5,6,7,8,9]
  
  // NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
  
  // NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
  
  // ALGORITHMSARRAYS
  
  
  // snail = function(array) {
  //   let output = []
        
  //   while(array.length) {
  
  //   output = output.concat(array.shift())
  
  //   for (let i = 0; i < array.length; i++) {
  //       output.push(array[i].pop())       
  //   }
      
  //   if (!array.length) break
  //   output = output.concat(array.pop().reverse())
  
  //   for (let i = array.length - 1; i >= 0; i--) {
  //       output.push(array[i].shift() )     
  //   }
  // }
  //   return output
  // }
  
  // console.log(snail([[1,2,3],
  //                    [8,9,4],
  //                    [7,6,5]]))
         
  
  //***********************************************************************************************************************************
  
  
  
  // Josephus Permutation
  
  // This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.
  
  // Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).
  
  // Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.
  
  // You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.
  
  // Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.
  
  // For example, with n=7 and k=3 josephus(7,3) should act this way.
  
  // [1,2,3,4,5,6,7] - initial sequence
  // [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
  // [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
  // [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
  // [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
  // [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
  // [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
  // [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
  // So our final result is:
  
  // josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]
  
  // function josephus(items,k){
  //   let order = []
  //   let position = 0
  
  //   while (items.length > 0) {    
  //       for (let i = 1; i <= k; i++) {
  //           position++
  //           if (position > items.length)  position = 1   
  //       }
  //       console.log(position);
  //       order.push(items[position - 1])
  //       items.splice(position - 1, 1)
  //       position--
  //   }
  //   return order
  // }
  
  // console.log(josephus([1,2,3,4,5,6,7],3))
  
  //***********************************************************************************************************************************
  
  
  // Decode the Morse code
  
  // In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
  // The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.
  
  // NOTE: Extra spaces before or after the code have no meaning and should be ignored.
  
  // In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.
  
  // Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
  
  // For example:
  
  // decodeMorse('.... . -.--   .--- ..- -.. .')
  // //should return "HEY JUDE"
  // NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
  
  // The Morse code table is preloaded for you as a dictionary, feel free to use it:
  
  // Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
  // C#: MorseCode.Get(".--") (returns string)
  // Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
  // Elm: MorseCodes.get : Dict String String
  // Haskell: morseCodes ! ".--" (Codes are in a Map String String)
  // Java: MorseCode.get(".--")
  // Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
  // Rust: MORSE_CODE
  // Scala: morseCodes(".--")
  // Swift: MorseCode[".--"] ?? "" or MorseCode[".--", default: ""]
  // C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
  // NASM: a table of pointers to the morsecodes, and a corresponding list of ascii symbols
  // All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.
  
  
  // const MORSE_CODE = {
  //   '.-':     'a',
  //   '-...':   'b',
  //   '-.-.':   'c',
  //   '-..':    'd',
  //   '.':      'e',
  //   '..-.':   'f',
  //   '--.':    'g',
  //   '....':   'h',
  //   '..':     'i',
  //   '.---':   'j',
  //   '-.-':    'k',
  //   '.-..':   'l',
  //   '--':     'm',
  //   '-.':     'n',
  //   '---':    'o',
  //   '.--.':   'p',
  //   '--.-':   'q',
  //   '.-.':    'r',
  //   '...':    's',
  //   '-':      't',
  //   '..-':    'u',
  //   '...-':   'v',
  //   '.--':    'w',
  //   '-..-':   'x',
  //   '-.--':   'y',
  //   '--..':   'z',
  //   '.----':  '1',
  //   '..---':  '2',
  //   '...--':  '3',
  //   '....-':  '4',
  //   '.....':  '5',
  //   '-....':  '6',
  //   '--...':  '7',
  //   '---..':  '8',
  //   '----.':  '9',
  //   '-----':  '0',
  // }
  
  // decodeMorse = function(morseCode){ 
  //   return morseCode.trim().split('   ').map(x => x.split(' ').map(x => MORSE_CODE[x]).join('')).join(' ')
  // }
  
  // console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
  
  //***********************************************************************************************************************************
  
  
  // Moving Zeros To The End
  
  // Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
  
  // moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
  
  // var moveZeros = function (arr) {
  //   const front = arr.filter(x => x !== 0)
  //   const end =  arr.filter(x => x === 0)
  //   return front.concat(end)
  // }
  
  // console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
  
  //***********************************************************************************************************************************
  
  
  
  // String incrementer
  
  // Your job is to write a function which increments a string, to create a new string.
  
  // If the string already ends with a number, the number should be incremented by 1.
  // If the string does not end with a number. the number 1 should be appended to the new string.
  // Examples:
  
  // foo -> foo1
  
  // foobar23 -> foobar24
  
  // foo0042 -> foo0043
  
  // foo9 -> foo10
  
  // foo099 -> foo100
  
  // Attention: If the number has leading zeros the amount of digits should be considered.
  
  
  // function incrementString (strng) {
  //   const txt = strng.replace(/\d/g, '')
  //   let num = strng.replace(/\D/g, '')
    
  //   num = (+('1' + num) + 1)
  //   num = String(num).split('').map(x => +x)
  //   num[0] > 1 ? num[0] -= 1 : num.shift()
    
  //   return txt + num.join('')
  // }
  
  // console.log(incrementString('foo099'))
  
  //***********************************************************************************************************************************
  
  
  // Categorize New Member
  
  // The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
  
  // To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
  
  // Input
  // Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
  
  // Note for F#: The input will be of (int list list) which is a List<List>
  
  // Example Input
  // [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
  // Output
  // Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
  
  // Example Output
  // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
  
  
  // function openOrSenior(data){
  //   return data.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open')
  // }
  
  // console.log(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))
  
  
  //***********************************************************************************************************************************
  
  
  // Sum Strings as Numbers
  
  // Given the string representations of two integers, return the string representation of the sum of those integers.
  
  // For example:
  
  // sumStrings('1','2') // => '3'
  // A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
  
  
  // function sumStrings(a,b) {
  //   let extent = 0, longerArr = [], shorterArr = [], diff = Math.abs(a.length - b.length), quotient = 0, tmp = 0
  //   if (a.length > b.length) {
  //     extent = a.length
  //     longerArr = a.split('').map(x => +x)
  //     shorterArr = b.split('').map(x => +x)
  //   } else {
  //     extent = b.length
  //     longerArr = b.split('').map(x => +x)
  //     shorterArr = a.split('').map(x => +x)
  //   }
  //   for (let i = extent - 1; i >= 0; i--) {
  //     if (i <= longerArr.length - 1 - shorterArr.length) {
  //       tmp = Math.floor((longerArr[i] + quotient ) / 10)
  //       longerArr[i] = (longerArr[i] + quotient ) % 10
  //       quotient = tmp
  //     } else {
  //       tmp = Math.floor((longerArr[i] + shorterArr[i - diff] + quotient ) / 10)
  //       longerArr[i] = (longerArr[i] + shorterArr[i - diff] + quotient ) % 10 
  //       quotient = tmp
  //     }
  //     if (i === 0 && quotient !== 0) longerArr.unshift(1)
  //   }
  //   return longerArr.join('').replace(/^[0]+/,'')
  // }
  
  // console.log(sumStrings('256', '23'))
  
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
  
  