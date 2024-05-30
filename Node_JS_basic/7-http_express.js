const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const HOST = 'localhost';

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

async function getStudents(database) {
  const data = await fs.readFile(database, 'utf8');
  const lines = data.split('\n').filter((line) => line);
  const students = lines.map((line) => line.split(','));
  const csStudents = students.filter((student) => student[3] === 'CS');
  const sweStudents = students.filter((student) => student[3] === 'SWE');
  const totalStudents = csStudents.length + sweStudents.length;
  const totalCsStudents = csStudents.length;
  const totalSweStudents = sweStudents.length;
  const csStudentsList = csStudents.map((student) => student[0]).join(', ');
  const sweStudentsList = sweStudents.map((student) => student[0]).join(', ');

  return [
    `Number of students: ${totalStudents}`,
    `Number of students in CS: ${totalCsStudents}. List: ${csStudentsList}`,
    `Number of students in SWE: ${totalSweStudents}. List: ${sweStudentsList}`,
  ].join('\n');
}

app.get('/students',async (req, res) => {
  const mateub = await getStudents(process.argv[2]);
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(`This is the list of our students\n${mateub}`);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
