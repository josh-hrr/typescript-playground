export class Kata {
  static getCount(str: string): number { 

   const myArray:string[] = str.split('');
   let counter:number = 0;

   const newResult:string[] = myArray.filter((value)=> {
    let lowerValue:string = value.toLowerCase();

    if(lowerValue === "a" || lowerValue === "e" || lowerValue === "i" || lowerValue === "o" || lowerValue === "u"){
      counter = counter + 1;
      return lowerValue;
    }
   })

   return counter;
  }
}
