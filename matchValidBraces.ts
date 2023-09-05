export function validBraces(braces: string): boolean {
   
  const regex = /\(\)|\[\]|\{\}/;    

  if(regex.test(braces)){
    return validBraces(braces.replace(regex, ''))
  }else{
    return braces.length === 0;
  } 
}
