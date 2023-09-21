export default function add(x: number): any {  
    const sum = (y: number) => add(x + y); 
    sum.valueOf = () => x;
    return sum; 
}
