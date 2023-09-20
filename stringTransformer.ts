export function stringTransformer(str: string) {
   

  let testArray:string[] = str.split('');

  let newArray:string[] = [];

  testArray.forEach(value => {

    if(value === ' '){ 
      newArray.push(' ');    
    }else{
      if(value.toUpperCase() === value){
      newArray.push(value.toLowerCase()); 
      } 
      if(value.toLowerCase() === value){
        newArray.push(value.toUpperCase());
      }  
    } 
  })

  return newArray.join('');
  
}
