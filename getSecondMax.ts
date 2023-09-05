
//getSecondMax from an array

let array:number[] = [1,100,3,50,15];   
let firstMax = Math.max(...array);  
let indexToRemove = array.indexOf(firstMax); 
let newArray = array.splice(indexToRemove, 1)

console.log(array) 

//
let secondMax = Math.max(...array);  

console.log('firstMax: ' + firstMax)
console.log('secondMax: ' + secondMax)
