const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Mátematica",
  "Português",
  "Química",
]

const weekdays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
]

//function convert number in data 
function getSubject(subjectNumber) {
  const pos = +subjectNumber
  return subjects[pos]
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects, weekdays, getSubject, convertHoursToMinutes
}