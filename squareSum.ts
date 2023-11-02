export function squareSum(numbers: number[]): number {
    let sum:number = 0;
    const result = numbers.map((value) => {
    sum = sum + (Math.pow(value, 2));
  })
    
    return sum;
}
