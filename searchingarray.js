let fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ) // 2 (last Apple) 

let veg = [
    {name: 'Potato'},
    {color:'brown'}
     
]

console.log(veg.findIndex(vegs =>vegs.name ==='Potato')); // 0 (first el)

const notes = ['do', 're', 'me'];
notes.forEach((note) => console.log(note))
// do
// re 
// me