function count(string) {
  
  const stringArray = string.split("");
  
  return stringArray.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, {})  
}
