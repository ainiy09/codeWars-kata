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