// create an Array using an Array literal
const newArray = [
  "fish",
 "crabs",
  "octopus",
   "whale"
  ];


// access the 1st item in the Array
const firstFish = oceanFish[0]


// access the last item in the Array
const lastIndex = oceanFish.length - 1;
const lastFish = oceanFish[lastIndex];

// print the length of the Array
console.log(oceanFish.length)

// use the length property to access the last item in the Array
lastIndex = oceanFish.length - 1;
const anotherLastFish = oceanFish[lastIndex]

// with for...of, loop over the Array, modify the value and add to a different Array
const oceanFish = ["fish", "crabs", "octopus", "whale"];

// oceanFish[0] = "jellyfish";
console.log(oceanFish[1])

const goodMexicanFood = []
for (let fish of oceanFish) {
  if (fish !== "fish"){
    goodMexicanFood.push(seafood);
  }
  console.log(goodMexicanFood);
}
