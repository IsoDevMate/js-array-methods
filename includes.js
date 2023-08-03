//If we want to check if item exists in the array, and don’t need the index, then arr.includes is preferred.

let arr = [1, 0, false];

console.log(arr.includes(false)) //true
console.log(arr.includes(1,0))

//arr.includes(item, from) – looks for item starting from index from, returns true if found.