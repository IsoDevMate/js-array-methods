function myMap(array, callback) {
  const myNewArray = [];

  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    myNewArray.push(callbackResult); 
  }

  return myNewArray;
}


// This could be called like this:
const addedArray = myMap([1, 2, 3], (arrayNum) => {
  return arrayNum + 2; 
});


// OR
const addedArrays = myMap([1, 2, 3], (arrayNum) => arrayNum + 2)