// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.


// It uses the splice method to remove one element (the game) starting from the gameIndex. 
//The splice method modifies the original array and returns an array of the deleted elements.

const id = '2'

const examplefn=({id})=>{
const gameIndex = db.games.findIndex(game => game.id === id)  //return the index of the game
if (gameIndex === -1) throw new Error('Game not found')
const deletedGames = db.games.splice(gameIndex, 1)
return deletedGames[0]
}

console.log(examplefn(id));

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

let array = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
array.splice(-1, 0, 3, 4);
console.log( array ); // 1,2,3,4,5
