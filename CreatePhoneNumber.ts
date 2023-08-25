const myArray:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const myNewArray:string[] = [];

myNewArray.push('(');
for(const i in myArray){ 
  if(Number(i) >= 0 && Number(i) <= 2){    
    myNewArray.push('' + myArray[i]);   
  } 
}

myNewArray.push(')')
myNewArray.push(' ')

for(const i in myArray){ 
  if(Number(i) >= 3 && Number(i) <= 5){    
    myNewArray.push('' + myArray[i]);   
  } 
}

myNewArray.push('-')

for(const i in myArray){ 
  if(Number(i) >= 6 && Number(i) <= 9){    
    myNewArray.push('' + myArray[i]);   
  } 
} 

const result = myNewArray.join('');

console.log(result)
