
/*
ESTA PAGINA É UNICAMENTE FEITA PARA TESTE SE ESTA CONSEGUINDO PEGAR DA PAGINA OS DADOS! 
*/
//iniciaremos pegando o modulo importado de db.js
const DtBase = require('./db')


const createProffy = require('./createProffy')

DtBase.then(async(db)=>{
  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
    whatsapp: "48991876255",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões."
  }

  classValue = {
    subject: 1,
    cost: "20"
    //o proffy id vira pelo banco de dados!
  }

  classScheduleValues = [

    //class_id vira pelo banco de dados apos cadastramos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
    
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //consultar dados inseridos!

  //todos os proffys
  //"SELECT * FROM proffys" == selecione tudo de _________
  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)

  //consultar as classes de um determinado professor e trazer os dados deste
  /* 
    SELECT classes.*, proffys.* == SELECIONE TUDO DE CLASSES, SELECIONE TUDO DE PROFFYS
    FROM proffys = DE PROFFYS
    JOIN classes ON (classes.proffy_id = proffys.id) == JUNTE(UNA) CLASSES EM (CLASSES.PROFFY_ID == PROFFYS ID) SE FOR IGUAL
    WHERE classes.proffy_id = 1; == ONDE CLASSES . PROFFY_ID = 1
  
  */
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)

  //console.log(selectClassesAndProffys)

  const selectedClassesSchedule = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300" 
  `)

  //console.log(selectedClassesSchedule)
})