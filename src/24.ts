function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const secretNumber = getRandomInt(10) + 5; // Example value, replace with your own number

console.log(`The secret number is: ${secretNumber}`);
