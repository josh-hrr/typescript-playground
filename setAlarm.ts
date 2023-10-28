export function setAlarm(employed: boolean, vacation: boolean) {
  
  let result: boolean = false; 
  if(employed && vacation){
    result = false;
  }else if(employed  && vacation === false){
    result = true;
  }else if(employed === false && vacation){
    result = false;
  }else if(employed === false && vacation === false){
    result = false;
  } 
  return result;
}
