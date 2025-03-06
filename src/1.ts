function getRandomTsCode() {
  const num = Math.floor(Math.random() * 10) + 1;
  if (num % 2 === 0) {
    return `const ${String.fromCharCode(97 + num)} = ${String.fromCharCode(65 + num)}`;
  } else {
    return `const ${String.fromCharCode(97 + num)}: number = ${num}`;
  }
}
