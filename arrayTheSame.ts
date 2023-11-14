let a = [121, 144, 19, 161, 19, 144, 19, 11];  
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(a.length);
console.log(b.length);

let condition = false;  

//needs to be sorted 
for(let i = 0; i<a.length; i++){   
  if(a[i] === Math.sqrt(b[i])){
    condition = true;
  }else{
    condition = false;
  }
} 
console.log(a)
