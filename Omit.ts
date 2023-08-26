type games = {
  title: string,
  id: number,
  description: string
}

type gameHistory = Omit<games, 'description' | 'id'>;

const newHistory: gameHistory = {
  title: "played recently god of war" 
}

const newGame: games = {
  title: 'the last of us',
  id: 60,
  description: 'game of the year of 2020'
}

console.log(newHistory)
console.log(newGame)
