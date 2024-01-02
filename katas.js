// TASK:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the
// alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or
// special characters included in the string, they should be returned as they are. Only letters from the
// latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Solution:
function rot13(message){
    return message.replace(/[a-zA-Z]/g, function (char) {
     const isUpperCase = char === char.toUpperCase();
     const shift = isUpperCase ? 65 : 97;
     return String.fromCharCode((char.charCodeAt(0) - shift + 13) % 26 + shift);
   });
 }

// ________________________________________________________________________________________________________________
//TASK:
// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

// Solution:
function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }
    const timeInSeconds = Math.floor(g / (v2 - v1) * 3600);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
  
    return [hours, minutes, seconds];
  }
// ________________________________________________________________________________________________________________
// TASK:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Solution:
function rgb(r, g, b) {
  r = Math.min(255, Math.max(0, Math.round(r)));
  g = Math.min(255, Math.max(0, Math.round(g)));
  b = Math.min(255, Math.max(0, Math.round(b)));

  const hexR = r.toString(16).padStart(2, '0').toUpperCase();
  const hexG = g.toString(16).padStart(2, '0').toUpperCase();
  const hexB = b.toString(16).padStart(2, '0').toUpperCase();

  return hexR + hexG + hexB;
}
// ________________________________________________________________________________________________________________
// TASK:
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, 
// where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. 
// Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). 
// E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. 
// That's why we can try out all possible (*) variations.
// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations 
// for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). 
// But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.
// Detective, we are counting on you!

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Solution:
function getPINs(observed) {
  const adjacentDigits = {
    '0': ['0', '8'],
    '1': ['1', '2', '4'],
    '2': ['1', '2', '3', '5'],
    '3': ['2', '3', '6'],
    '4': ['1', '4', '5', '7'],
    '5': ['2', '4', '5', '6', '8'],
    '6': ['3', '5', '6', '9'],
    '7': ['4', '7', '8'],
    '8': ['5', '7', '8', '9', '0'],
    '9': ['6', '8', '9'],
  };
  function generateVariations(pinIndex) {
    if (pinIndex === observed.length) {
      return [''];
    }
    const currentDigit = observed[pinIndex];
    const nextVariations = generateVariations(pinIndex + 1);
    const currentVariations = adjacentDigits[currentDigit].flatMap(
      (adjacentDigit) => nextVariations.map((variation) => adjacentDigit + variation)
    );
    return currentVariations;
  }
  return generateVariations(0);
}
// ________________________________________________________________________________________________________________
// TASK:
// Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Input range : 1 <= n < 4000
// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Solution:
class RomanNumerals {
  static toRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }

    return result;
  }

  static fromRoman(str) {
    const romanNumerals = {
      'M': 1000,
      'D': 500,
      'C': 100,
      'L': 50,
      'X': 10,
      'V': 5,
      'I': 1
    };

    let result = 0;

    for (let i = 0; i < str.length; i++) {
      const currentNumeral = romanNumerals[str[i]];
      const nextNumeral = romanNumerals[str[i + 1]];

      if (nextNumeral > currentNumeral) {
        result += nextNumeral - currentNumeral;
        i++;
      } else {
        result += currentNumeral;
      }
    }

    return result;
  }
}
// ________________________________________________________________________________________________________________
// TASK:
// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

// Solution:
var solution = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    throw new Error('Arrays must be of equal length');
  }

  const sumOfSquaredDifferences = firstArray.reduce((sum, value, index) => {
    const absoluteDifference = Math.abs(value - secondArray[index]);
    const squaredDifference = Math.pow(absoluteDifference, 2);
    return sum + squaredDifference;
  }, 0);

  const average = sumOfSquaredDifferences / firstArray.length;

  return average;
};
// ________________________________________________________________________________________________________________
// TASK:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// Solution:
function add(a, b) {
  let result = '';
  let carry = 0;

  while (a.length < b.length) {
    a = '0' + a;
  }
  while (b.length < a.length) {
    b = '0' + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    const digitA = parseInt(a[i], 10);
    const digitB = parseInt(b[i], 10);
    const sum = digitA + digitB + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result.replace(/^0+/, '') || '0';
}
// ________________________________________________________________________________________________________________
// Solution with using BigInt:
function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}
// ________________________________________________________________________________________________________________
// TASK:
// Given a positive number n > 1 find the prime factor decomposition of n. 
// The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// Solution:
function primeFactors(n) {
  let result = '';
  for (let divisor = 2; n > 1; divisor++) {
    let count = 0;
    while (n % divisor === 0) {
      n /= divisor;
      count++;
    }
    result += count ? `(${divisor}${count > 1 ? `**${count}` : ''})` : '';
  }
  return result;
}
// ________________________________________________________________________________________________________________
// TASK:
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

// Solution:
function incrementString (strng) {
  const match = strng.match(/(.*?)(\d*)$/);
  const prefix = match[1] || '';
  const numStr = match[2] || '0';

  const num = parseInt(numStr) + 1;
  const incrementedNumStr = String(num).padStart(numStr.length, '0');

  return prefix + incrementedNumStr;
}
// ________________________________________________________________________________________________________________
// TASK:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Solution:
function findOdd(A) {
  return A.reduce((result, num) => result ^ num, 0);
}
// ________________________________________________________________________________________________________________
// TASK:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only 
// if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution:
function toCamelCase(str) {
  const words = str.split(/[-_]/);

  const camelCaseString = words.map((word, index) =>
    index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');

  return camelCaseString;
}
// ________________________________________________________________________________________________________________
// TASK:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// Solution:
function arrayDiff(a, b) {
  return a.filter(item => !b.includes(item));
}
// ________________________________________________________________________________________________________________
// TASK:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
// Solution:
function persistence(num) {
  return num < 10 ? 0 : 1 + persistence([...num.toString()].reduce((acc, digit) => acc * digit, 1));
}