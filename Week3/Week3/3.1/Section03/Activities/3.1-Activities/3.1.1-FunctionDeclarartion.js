// TODO: using the function expressions
//below, refactor them into function declarations

// 1
// Utilizing Function Expression
//const greet = function() {
  //console.log("Hello!");
};

// Utilizing Function Declaration
function greet() {
  console.log("Hello!");
}

// 2
// const threeModTwo = function() {
 // console.log(3 % 2);
};

function threeModTwo() {
  console.log(3 % 2);
}

// 3
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }

function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else
    console.log(false)
}


};
