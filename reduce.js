// result of the previous call becomes the first argument of the next one.

let arr= [1,2,3,4,5,6,7]
let answer=arr.reduce((subtract,current)=>subtract-current)
console.log( answer)
//-28