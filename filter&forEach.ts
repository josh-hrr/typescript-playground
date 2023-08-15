const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
console.log('filtering by even numbers')  

//filter creates a new array if condition is met
const result = array.filter((value) => { 
    return value % 2 === 0;
}); 

//forEach reads each element of an array, it does not create a new array, so variable value is undefined
const evenResult: number[] = [];
const each = array.forEach((value) => { 
    if(value % 2 === 0){
        evenResult.push(value);
    }   
})


console.log(`result of filter: `, result);
console.log(`result of forEach: `, each); //undefined
console.log(`result of forEach: `, evenResult);  
