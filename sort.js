let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // 1, 2, 15
//comparing strings

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) );
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); 

arr.sort( (a, b) => a - b ) //neater sorting
