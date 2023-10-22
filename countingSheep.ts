export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  
  let number = 0;
  arrayOfSheep.forEach(value => {
    if(value){
      number = number + 1;
    }
  })
  
  return number;
}
