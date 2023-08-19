export const digitalRoot = (n:number):number => {  
    const myArray: string[] = n.toString().split('');
    let result: number = 0; 

    const myMap:number[] = myArray.map((value) => { 
        return Number(value)
    })    

    myMap.forEach((value) => {
        result = result + value;
    }) 

    if(result > 9){ 
        return digitalRoot(result); 
    }  
    return result;
};
