export function inArray(a1: string[], a2: string[]): string[] {
  
  let result = false; 
  const uniqueSubstrings = new Set<string>(); 
  a1.forEach(value => {  
    a2.forEach(valueTwo => {
      if(valueTwo.includes(value)){
        result = true; 
        uniqueSubstrings.add(value);
      }
    })
  }) 
  const resultArray = Array.from(uniqueSubstrings).sort(); 
  return resultArray;  
}
