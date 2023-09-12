export function rgb(r: number, g: number, b: number): string {  
  
  //two parameters
  //one 0, will make sure the max num = 0
  //IF second argument is lower than 0 (-100);
  //result will be 0 but not lower
  
  /*
  
  two parameters
  one 255
  IF second argument is greater than 255 (350)
  result will be 255 always
  
  */
  
  /*
  
  Math.round, in case a decimal is used in input data
  
  */
  
  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b))); 
  
  //padStart, it adds extra data at the beginning ( length , data )
  //toString(16)   converts number into string HEX
  
  let result1 = r.toString(16).padStart(2, '0');
  let result2 = g.toString(16).padStart(2, '0');
  let result3 = b.toString(16).padStart(2, '0'); 
  
  return `${result1.toUpperCase()}${result2.toUpperCase()}${result3.toUpperCase()}`; 
}
