export function pyramid(n: number) {
   
  const result = [];
  let subArray = []; 

  for(let i = 1; i <= n; i++){
    subArray.push(1);             
    result.push([...subArray]); //REST operator creates a copy of subArray and push it into result
  }

  return result;
  
}

//2
