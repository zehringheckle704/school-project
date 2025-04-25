function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error('Cannot calculate average with an empty array.');
    }
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4])); // Output: 2.5
