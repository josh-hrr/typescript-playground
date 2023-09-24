let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let format = "(www) www-wwww" 
for(let i = 0; i<phoneNumber.length; i++){   
  format = format.replace('w', phoneNumber[i])  
}
