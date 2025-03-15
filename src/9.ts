`const randomTsCode = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '1234567890';
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}`