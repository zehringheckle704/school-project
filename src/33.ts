function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

// Usage example:
const randomNumber = getRandomInt(100); // Generate a random integer between 0 and 99
console.log(randomNumber); // Output will vary randomly between 0-99
