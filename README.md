# TypeScript Code Practice Repository

## Introduction

Welcome to the TypeScript Code Practice repository! This repository is designed to help you improve your TypeScript coding skills through a series of practice exercises and challenges. Whether you're a beginner looking to learn TypeScript or an experienced developer seeking to refine your skills, this repository has something for you.

## Contributing

Contributions are welcome! If you have an exercise or challenge that you'd like to share, please follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/add-new-exercise`.
3. Add your exercise files to a new directory.
4. Write a clear and concise README for your exercise, detailing the problem statement and any additional information.
5. Commit your changes: `git commit -m "Add new exercise: Exercise Name"`.
6. Push to your forked repository: `git push origin feature/add-new-exercise`.
7. Open a pull request to this repository's `main` branch. 

Happy coding!

# array methods
## filter
### remove duplicates from an array

export const distinct = (a: number[]): number[] => {
  const result = a.filter((value, index) => a.indexOf(value) === index);
  return result;
}
