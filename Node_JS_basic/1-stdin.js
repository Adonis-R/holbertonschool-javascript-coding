console.log('Welcome to Holberton School, what is your name?')
process.stdin.on('data', function(data) {

 console.log(`Your name is: ${data}`);
 console.log('This important software is now closing\n');
  process.exit();
});
