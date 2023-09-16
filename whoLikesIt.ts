export const likes = (a : string[]) : string => { 
  let msg:string; 
  
  if (a.length > 3) {
    msg = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  } else if (a.length === 0) {
    msg = `no one likes this`;
  } else if (a.length === 1) {
    msg = `${a[0]} likes this`;
  } else if (a.length === 2) {
    msg = `${a[0]} and ${a[1]} like this`;
  } else {
    msg = `${a[0]}, ${a[1]} and ${a[2]} like this`;
  }

  return msg;
}
