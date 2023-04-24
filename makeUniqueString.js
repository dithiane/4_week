/* Make Unique String
Difficulty
Medium

Concepts
Loops, Conditionals, String Methods


Write a function to remove all duplciate letters from a provided string. 
The string will only contail lowercase letters between a - z. The string will not contain spaces.

For example:

>>> makeUnique('helloworld')
// helowrd

>>> makeUnique('iwanttoclimbamountain')
// iwantoclmbu */

//const unique = (str) => [...str].reduce((acc, cur, index, arr) => !arr.splice(index,1).includes(cur)? acc + cur : "", "" )

const unique = (str) => [...new Set(str)].join("")
console.log(unique('helloworld'))
console.log(unique('iwanttoclimbamountain'))