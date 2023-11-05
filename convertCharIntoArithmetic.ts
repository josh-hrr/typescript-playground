export function basicOp(operation: string, value1: number, value2: number): number {
  let converIntoArithmetic = operation.charAt(0); 
  let result = value1 + converIntoArithmetic + value2;  
  return eval(result);
}
