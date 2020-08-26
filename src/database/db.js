
//instalei a dependencia "npm install sqlite"
const Database = require('sqlite-async')

//instanciei database e abri com .open(coloquei o diretorio aqui e
// concatenei com o arquivo .database.sqlite(que criei antes que este db.js))
//usei o then das promisses para que não execute a proxima linha enquanto esta n ser executada!
//e passei a function execute como parametro ou seja tente executar esta função antes de ir para proxima linha.
//Database.open(__dirname + '/database.sqlite').then(execute)

//criei a funcão aqi
function execute(db) {
  //aqui criamos as tabelas sql com a função do sqlite .exec(` e usamos aqui interpolação `)
  //dentro esta a lingugem SQL PADRÃO DE BANCO DE DADOS ('ESTUDAR MAIS PARA COMPREENDER!)
  //MAIS É BEM INTUITIVA 
  return db.exec(`
  CREATE TABLE IF NOT EXISTS proffys ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    whatsapp TEXT,
    bio TEXT
  ); 
    
  CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject INTEGER,
    cost TEXT,
    proffy_id INTEGER
  );
      
  CREATE TABLE IF NOT EXISTS class_schedule (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INTEGER,
    weekday INTEGER,
    time_from INTEGER,
    time_to INTEGER
  );
  `)
} 

//esta mesma funçã de promisse ira ser exportada para o arquivo test.js
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)