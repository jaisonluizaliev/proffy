/*
NESTA PAGINA FOI CRIADA A FUNÇÃO QUE IRA GERENCIAR TODO BANCO DE DADOS
PRIMEIRAMENTE IREMOS EXPORTAR UMA FUNÇÃO ASSINCRONA QUE FAZ COM QUE SEJA FINALIZADO CADA FUNÇÃO DENTRO DELA QUE ESTEJA COM AWAIT NA FRENTE*/
module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
  //para dados inseridos em proffy a função db.run ira armazenar os dados
  //INSERT INTO proffys (dado nome, avatar, whatsapp, bio serão correspondetes aos 'values' referentes em cada objeto/propriedade)
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsapp}",
      "${proffyValue.bio}"
    );
  `)
  //então sera armazenado em proffy_id todos os resultados
  const proffy_id = insertedProffy.lastID

  //agora o mesmo na tabela classes

  const insertedClass = await db.run(`
      INSERT INTO classes (
        subject, 
        cost,
        proffy_id
      ) VALUES (
        "${classValue.subject}",
        "${classValue.cost}",
        "${proffy_id}"
      );
  `)

  const class_id =  insertedClass.lastID

  //e também na class_schedule
  //POREM AQUI TEMOS UM DIFERENCIAL QUE TODOS OS DADOS SERÃO RECEBIDOS EM ARRAYS.
  //POR ISSO ESTA SENDO O LAÇO DE INTERAÇÃO .map() para cada array fazemos um mapeamento
  /* 
  os dados chegaram no formato 
        weekday [

        ]
        time_from [

        ]
        time_to [

        ]
        por isto map passa uma array sempre como padrão (classScheduleValue) que tbm é um parametro ao qual podemos colocar um identificado para entendermos.
        para cada um classScheduleValue.array-recebido.
  */ 
  const insertedAllClassScheduleValues = classScheduleValues.map(
    (classScheduleValue) => {
    return db.run(`
      INSERT INTO class_schedule (
        class_id,
        weekday,
        time_from,
        time_to
      ) VALUES (
        "${class_id}",
        "${classScheduleValue.weekday}",
        "${classScheduleValue.time_from}",
        "${classScheduleValue.time_to}"
      );
    `)
  })

  //aqui esperaremos que seja executado todos os dados para então entregar um resposta backend -> front
  await Promise.all(insertedAllClassScheduleValues)
}