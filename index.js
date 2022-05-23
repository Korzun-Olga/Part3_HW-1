const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

//Строка из названия предметов через запятую
const stringSubjects = Object.keys(subjects);
const string = String(stringSubjects);
console.log(string);

//Общее количество студентов и учителей на всех предметах
const arrValues = Object.values(subjects);
console.log(arrValues);
const summValues = arrValues.reduce(
  (acc, value) => acc + value.students + value.teachers,
  0
);
console.log(summValues);

//среднее количество студентов на всех предметах
const sumStudents = arrValues.reduce((acc, value) => acc + value.students, 0);
const sumAverage = sumStudents / arrValues.length;
console.log(sumAverage);

//Создать массив из объектов предметов
//через клонирование объекта
const arrObjects = Object.assign([], subjects);
console.log(arrObjects);

//получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const sortTeachers = arrValues.sort((a, b) => b.teachers - a.teachers);
console.log(sortTeachers);
