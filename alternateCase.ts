export function toAlternatingCase(s: string): string {  
  let newArray = s.split(""); 
  console.log(newArray);
  let result: any = []; 
  newArray.forEach(value => {   
    if(value === value.toLowerCase()){
      result.push(value.toUpperCase());
    }else if(value === value.toUpperCase()){
      result.push(value.toLowerCase());
    }
  })
  
  return result.join("");
}
