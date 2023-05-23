
// add if statement to display all the value increamented
let iterable= [5,6,7,8]
for(let value of iterable){
     (value += 1)
   console.log(value)
}
console.log("next is a for await...of loop")
// for await...of statement creates a loop iterating over async iterable objects as well as sync iterables.
//used in contexts where await is used
const LIMIT = 3; // determines  limit of iterations in the loop

const asyncIterable = { //obj asyncIterable
  [Symbol.asyncIterator]() {
    let i = 0; //value to track current iteration
    return {
      next() {
        const done = i === LIMIT;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        // This will be reached if the consumer called 'break' or 'return' early in the loop.
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
