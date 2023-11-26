export function printerError(s: string): string { 
  const errorCount = s.split('').filter(char => { 
    if(char > 'm'){ 
      return char;
    } 
  }).length; 

  return `${errorCount}/${s.length}`;
}
