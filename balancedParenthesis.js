/*
Balanced Parenthesis
Difficulty
Medium

Concepts
Loops, Conditionals


Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

>>> has_balanced_parens("()")
// true

>>> has_balanced_parens("(Oh Noes!)(")
// false

>>> has_balanced_parens("((There's a bonus open paren here.)")
// false

>>> has_balanced_parens(")")
// false

>>> has_balanced_parens("(")
// false

>>> has_balanced_parens("(This has (too many closes.) ) )")
// false
You may consider a string with no parentheses balanced:

>>> has_balanced_parens("Hey...there are no parens here!")
// true
*/

const has_balanced_parens = (str) => console.log(!([...str].reduce((acc, cur) => cur === "(" ? acc += 1 : cur === ")" ? acc -= 1: acc, 0)))

has_balanced_parens("())")
// true

//has_balanced_parens("(Oh Noes!)(")
// false

//has_balanced_parens("((There's a bonus open paren here.)")
// false
//has_balanced_parens(")")
// false

//has_balanced_parens("(")
// false

//has_balanced_parens("(This has (too many closes.) ) )")
// // false

//has_balanced_parens("Hey...there are no parens here!")
// // true