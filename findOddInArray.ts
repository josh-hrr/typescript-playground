export const findOdd = (xs: number[]): number => { 
  
  let result:number = 0;
  
  const countMap: Record<number, number> = {}; 
  for(const num of xs){  
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for(const num in countMap){
    if(countMap[num] % 2 !== 0){
      result = parseInt(num);
    }
  }
  
  return result;
};
