console.log('Welcome to Holberton School, la mienne est plus grosse!!!what is your name?');
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
});
