//req.body uma forma de esconder os dados enviado pelo formulario
const data = req.body
//add on proffys list
const isNotEmpty = Object.keys(data).length > 0
if (isNotEmpty) {

  //retorne o dado em texto 
  data.subject = getSubject(data.subject)

  //take data and keep in database
  proffys.push(data)

  //go to study
  return res.redirect("/study")
}