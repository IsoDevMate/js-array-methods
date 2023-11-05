//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//I am utilizing split and join array methods

//below is my trial though has an error
let names1 = "my-short-string";
const arr = names.split('-');


const camelize= (arr)=>{
let cameziled =camelize.map((word,index)=>{
    if(index!==0){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return word
})
let arr =cameziled.join('')
return arr
}


//below is alternative  correct solutions


const camelize = str => {
  const arr = str.split('-');
  const camelized = arr.map((word, index) => {
    if (index !== 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });
  const result = camelized.join('');
  return result;
};

let names = "my-short-string";
let camelized = camelize(names);
console.log(camelized); // Output: "myShortString"



//solution 2

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}