/*

optional parameter
OR in case the option parameter is not pass an argument so it does not through 'undefined'

optional paramenter
should go at the end  

*/


 
 const fullName = (firstName:string, lastName?:string):string => {
    return `${firstName} ${lastName || "No Input"}`;
 }

 const myName = fullName("Tony");
 console.log(myName);



/* 

rest operator

*/
 const fullName = (firstName:string, ...restoDeArgumentos:string[]):string => {
    return `${firstName} ${restoDeArgumentos.join(' ')}`;
 }

 const myName = fullName("Tony", "test1", "test2");
 console.log(myName);
