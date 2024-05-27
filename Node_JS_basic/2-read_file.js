const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    lines.shift();
    const studentsByField = {};

    for (const line of lines) {
        const [firstname,,, field] = line.split(',');

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    const totalStudents = lines.length;

    console.log(`Number of students: ${totalStudents}`);

    for (const field in studentsByField) {
        const count = studentsByField[field].length;
        const list = studentsByField[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${list}`);
      }
    } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
