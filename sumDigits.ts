export function sumDigits(n: number):number { 
  let array:string[] = n.toString().split(''); 
  let result:number = 0; 
  array.forEach(value => { 
    let valueIntoNum = parseInt(value);
    if(!isNaN(valueIntoNum)){
      result = result + valueIntoNum;
    } 
  });
  return result;
}
