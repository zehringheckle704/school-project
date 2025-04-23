const fs = require('fs');

// Read the content of a file named 'data.txt'
const data = fs.readFileSync('./data.txt', { encoding: 'utf8' });

// Replace specific strings in the file with new strings
const updatedData = data.replace(/apple/g, 'banana').replace(/orange/g, 'lemon');

// Write the updated content back to the file
fs.writeFileSync('./updated_data.txt', updatedData);
