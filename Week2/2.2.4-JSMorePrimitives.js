// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let one = "string";
let two = 2;
let three = true;
let four = null;
let five = undefined;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(one, two, three, five, four);

// create a variable that references a template literal
// inside the template literal, use two of the above variables
let str = 'This is a string: ${one}, and this is number: ${two}';
// reassign the value of the variable that references "null"
four = 4;
// print the value and its type
console.log(four, typeof 4);
// print a variable that causes a ReferenceError
console.log("f");
// alter the previous line to no longer cause a ReferenceError
