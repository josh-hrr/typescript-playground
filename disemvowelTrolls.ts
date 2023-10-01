export class Kata {
  static disemvowel(str: string): string { 

  const myNewResult = str.split('');  
  const vowels = ["a", "e", "i", "o", "u"];
  const withoutVowels = [];

   for(let i = 0; i<myNewResult.length; i++){  
    if(myNewResult[i].toLowerCase() !== "i" && myNewResult[i].toLowerCase() !== "a" && myNewResult[i].toLowerCase() !== "e" && myNewResult[i].toLowerCase() !== "o" && myNewResult[i].toLowerCase() !== "u"){
      withoutVowels.push(myNewResult[i]);
    }
   } 

  return withoutVowels.join(''); 
  }
}
