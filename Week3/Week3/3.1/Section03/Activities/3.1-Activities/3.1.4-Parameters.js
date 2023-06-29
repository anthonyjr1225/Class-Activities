// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction(param1, param2){
   console.log(param1,param2);
   return param1 + param2;
}


// invoke the function and pass in two numbers
console.log
let sumOf = myFunction(5, 4);
console.log(sumOf);
// invoke the function and pass in more than two numbers
let sumOfMoreTwoNumbers = myFunctions(5, 4, 10, 20)
Console.LOG(sumOfMoreTwoNumbers);
;// invoke the function and pass in only one number
let oneNum = myFunction(10);
console.log(oneNum);
// change the function to set default values for the parameters
function myFunction(param1, param2 = 4) {
  console.log(param1, param2);
}


// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myFunction(param1, ...param2) {
  console.log(param1);
  console.log(param2);

  return param1 + param2
}
// again, invoke the function and pass in more than two numbers
let infiniteNums = myFunction(1, 2, 3, 4, 5, 6, 7, 8);
console.log
