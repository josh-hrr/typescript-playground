export function xo(str: string) : boolean { 
  let testArray:string[] = str.split("");   
  let counterX:number = 0;
  let counterO:number = 0;
  let equal:boolean = false;

  testArray.forEach(value => {
    if(value.toLowerCase() === "o"){
      counterX = counterX + 1;
    }
    if(value.toLowerCase() === "x"){
      counterO = counterO + 1;
    }
  }) 
  if(counterX === counterO){
    equal = true;
  }else{
    equal = false;
  } 
  return equal;
}
