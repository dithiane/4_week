/* Decode String
Difficulty
Medium

Concepts
Loops


In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello" */

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function decode(str){
//     let result = "";
//     let shift = Number(str[0])
//     console.log(!!Number(str[0]))
//     str = str.toLowerCase();
//     for (let i = 1; i < str.length; i++){
//         let index = alphabet.indexOf(str[i])
//         result += alphabet[index+shift]
//     }
//     return result;
// }

const decode = (str) => str.split("").reduce((acc, cur, _, arr) => !Number(cur) ? acc + alphabet[alphabet.indexOf(cur) + Number(arr[0])] : "", "")

console.log(decode("1a"))
console.log(decode("3ce"))
console.log(decode("2fcjjm"))
