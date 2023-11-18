export function descendingOrder(n: number): number {
  const digits = n.toString().split('');
  const sortedDigits = digits.sort((a, b) => parseInt(b) - parseInt(a));
  const result = parseInt(sortedDigits.join(''));
  return result;
}
