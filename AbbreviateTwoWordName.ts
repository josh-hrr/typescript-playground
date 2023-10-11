export function abbrevName(name: string): string { 

  let words = name.split(' ');
 

 const initials = words.map(word => {
  let initialLowerCase = word[0].toUpperCase(); 

  return initialLowerCase; 

  });

  return initials.join('.');
}
