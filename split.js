//split string into letters
let str = "test";

alert( str.split('') ); // t,e,s,t



let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo 
}