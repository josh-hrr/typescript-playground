export function sumDigits(n: number): number { 
  
  return String(n).split('')
        .filter(string => string !== '-')
        .map(string => parseInt(string))
        .reduce((acc, curr) => acc + curr); 
  
} 

