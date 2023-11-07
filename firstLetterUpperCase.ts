String.prototype.toJadenCase = function () {  
  let strTestArray:string[] = this.split(" ");
  let strTestArrayResult:string[] = [];  

  for(let i = 0; i<strTestArray.length; i++){  
      strTestArrayResult.push(strTestArray[i].charAt(0).toUpperCase() + strTestArray[i].slice(1, strTestArray[i].length));   
  } 
  return strTestArrayResult.join(" ");
} 

interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}
