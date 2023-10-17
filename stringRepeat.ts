export function repeatStr(n: number, s: string): string { 
  let result:string = ""; 
  if(n != 0){
    result = s.repeat(n);
  } 
  return result; 
}
