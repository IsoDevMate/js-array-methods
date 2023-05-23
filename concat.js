//concat(...items) – returns a new array: copies all members of the current one and adds items to it.
// If any of items is an array, then its elements are taken
let arr = ["we","want"]
let arrayLike = {
     [Symbol.isConcatSpreadable]: true,
  0: "something",
  1: "else",
  length: 2
};

console.log(arr.concat(arrayLike,["peace","among"]))
console.log(arr.concat(["peace","among"],["devs","python"]))
