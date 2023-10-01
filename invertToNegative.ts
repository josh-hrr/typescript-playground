export function invert(array: number[]): number[] {
  
  let result:number[] = [];
  
  array.forEach(value => {
    if(value >= 0 || value <= 0){
      result.push(value * -1)
    } 
  })
  
  return result;
}
