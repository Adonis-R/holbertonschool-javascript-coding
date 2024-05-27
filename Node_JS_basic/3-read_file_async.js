const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else { 
        const lines = data.split('\n');
        const header = lines.shift();
        const studentsByField = {};

        for (const line of lines) {
          if (line.trim().length > 0) {
            const [firstname, lastname, age, field] = line.split(',');

            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
          }
        }
        const totalStudents = lines.length;

        console.log(`Number of students: ${totalStudents}`);

        for (const field in studentsByField) {
          const count = studentsByField[field].length;
          const list = studentsByField[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          resolve();
        }
      }
    });
  });
}

module.exports = countStudents;
