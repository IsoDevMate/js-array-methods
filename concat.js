let arr = ["we","want"]
let arrayLike = {
     [Symbol.isConcatSpreadable]: true,
  0: "something",
  1: "else",
  length: 2
};

console.log(arr.concat(arrayLike,["peace","among"]))
console.log(arr.concat(["peace","among"],["devs","python"]))