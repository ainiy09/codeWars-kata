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