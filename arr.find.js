//Imagine we have an array of objects. How do we find an object with the specific condition?

 let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
     ];

  
    //solution 1
    // returns array of the specific user whose id is equal to the one queried users
    let someUsers = users.find(item => item.id == 3);
    console.log(someUsers); 
    // Output: { id: 3, name: "Mary" }

 //The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

//The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

//Here’s an example:

let userers = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(userers.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(userers.findLastIndex(user => user.name == 'John')); // 3
   
