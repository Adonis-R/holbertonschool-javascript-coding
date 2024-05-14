#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const ftext = process.argv[3];

fs.writeFile(filePath,  ftext, 'utf-8', (err) => {
  if (err) {console.error(err);}
});
