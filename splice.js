// splice method
const arr = ["ab","cd","ef"]
arr.splice(1,1) //from index 1 del 1 element
console.log(arr); //output [ 'ab', 'ef' ]

//remove and replace
const arr1= ["ab","cd","ef","gh","ij","kh"]
arr1.splice(0,3,"come on","let up join") //from index 0 del 3 element(s) and replace
console.log(arr1);

//removed elements
const arr2= ["ab","cd","ef","gh","ij","kh"]
let removed = arr2.splice(0,3)/// remove 3 first elements
console.log(removed);

const arr4 = [ "ak","tk","br","cd"]
arr4.splice(2,0,"come on","let up join")
console.log(arr4);