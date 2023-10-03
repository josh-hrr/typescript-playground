export function past(h: number, m: number, s: number): number {
// reason: Unix epoch time is a way of representing time as number, it starts counting from a specific moment in history. 
  const midnight = new Date(0); 
  midnight.setUTCHours(h, m, s, 0);  
  const totalMiliseconds: number = midnight.getTime(); 
  return totalMiliseconds;
}
