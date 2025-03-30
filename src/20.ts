function calculateBMI(weight: number, height: number): number {
  const bmi = weight / (height * height);
  return Math.round(bmi.toFixed(2));
}

console.log(calculateBMI(70, 1.8));
