const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  return str.split(" ")
  // TODO - write a function which converts a multi-word string into an array of words
};

const reverse = str => {
  let flip = ""
  let i = str.length
  while (i--) {
    flip += str[i]
  }
  return flip
  // TODO - write a function which reverses the string
};

const uniqueOnes = arr => {
  let unique = []
  let i = 0
  while (i < arr.length) {
    if (unique.indexOf(arr[i]) !== -1) {
        unique.push(arr[i])
    }
    i++
  }
  // TODO - write a function which returns the inputted array without duplicate elements
};

const factorial = num => {
  let product = 1
  while (num > 0) {
    product *= num
    num--
  }
  return product
  // TODO - write a function which returns the factorial of a positive integer
};

const zip = (arr1, arr2) => {
  let zip = []
  if (arr1.length === arr2.length) {
    let i = 0
    while (i < arr1.length) {
      zip.push(arr1[i] + ", " + arr2[i])
      i++
    }
    return zip
  }
  return -1
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
      return false;
  for(var i = arr1.length; i--;) {
      if(arr1[i] !== arr2[i])
          return false;
  }

  return true;
}

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(arraysEqual(tokenize("hello my name is owen"),["hello","my","name","is","owen"]))
assert(reverse("3df") === "fd3")
//assert(arraysEqual(uniqueOnes([1,2,2,3,4,5,5]),[1,2,3,4,5]))
assert(factorial(8) === 40320)
assert(arraysEqual(zip([1, 2, 3], [5, 3, 1]),[[1, 5], [2, 3], [3, 1]]))