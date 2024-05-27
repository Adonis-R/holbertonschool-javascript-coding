const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
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

    Object.keys(studentsByField).forEach((field) => {
      const count = studentsByField[field].length;
      const list = studentsByField[field].join(', ');
      console.log(`Nombre d'étudiants dans ${field}: ${count}. Liste: ${list}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
