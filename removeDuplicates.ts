export const distinct = (a: number[]): number[] => { 
    const result = a.filter((value, index) => a.indexOf(value) === index); 
  return result; 
};
