/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string



*/

export const fakeBin = (x:string):string => {
  let xArray = x.split("");
  let xNewArray:string[] = [];

  const xMap = xArray.map(value => {
      let newValue = parseInt(value);

      if(newValue <= 4){
          xNewArray.push("0");
      }else if(newValue >= 5){
          xNewArray.push("1");
      }  
  })
  
  return xNewArray.join("");
};
