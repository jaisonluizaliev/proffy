
//server
const express = require('express');
const server = express()
//pages
const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  savedClasses
} = require('./pages')

//SET OF NUNJUCKS
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})
server
//receber os dados de forma encoded do req.body
.use(express.urlencoded({extended: true}))
//DECLARATION OF STATIC PAGES
server.use(express.static("public"))

//CALL ROUTES
server.get("/", pageLanding)
.get("/study", pageStudy)
.get("/giveclasses", pageGiveClasses)
.post("/saved-class", savedClasses)

//PORT LISTEN
.listen(5500)
