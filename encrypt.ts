export const encryptThis = (str: string): string => { 

  if(str.length === 1){ 
    return str.charCodeAt(0).toString(); 
  }else if(str.length === 0){
    return "";
  }else{ 
  let testWordArr = str.split(' ');  
    
  const test = testWordArr.map((value) => { 
    let result:string; 
    let acsii = value.charCodeAt(0); 
    
    if(value.length === 1){
      return acsii
    }
    
    if(value.length > 1){
    let newValue = value.slice(1,value.length);  
    let switch1 = newValue[newValue.length - 1] 
    let switch2 = newValue[0]  
    let resultValue = newValue.slice(1,newValue.length-1);   
      
    if(value.length === 2){
      return acsii+switch1+resultValue;
    }  
    
    return acsii+switch1+resultValue+switch2; 
    } 
  })  

  return test.join(' '); 
  }   
