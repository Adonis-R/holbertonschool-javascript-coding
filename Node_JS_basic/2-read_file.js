const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    const lines = data.split('\n');
    let sweCount = 0;
    let csCount = 0;
    const csList = [];
    const sweList = [];

    // Iterate through each line.
    for (const line of lines) {
      const [firstName, lastName, age, field] = line.split(',');

      // Check if the line is not empty
      if (firstName && lastName && age && field) {
        if (field === 'CS') {
          csCount += 1;
          csList.push(firstName);
        } else if (field === 'SWE') {
          sweCount += 1;
          sweList.push(firstName);
        }
      }
    }

    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
