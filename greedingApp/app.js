// app.js
const fs = require('fs');
const readline = require('readline');
const generateGreeting = require('./greetings');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What is your name? ', (name) => {
    const greeting = generateGreeting(name);
  
    // Save the generated greeting to the output.txt file
    fs.writeFile('output.txt', greeting, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Greeting saved to output.txt');
      }
      rl.close();
    });
  });
  