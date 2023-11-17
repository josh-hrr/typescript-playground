export function doubleChar(str: string): string{
  return str.split('').map(value => value.repeat(2)).join('');
}
