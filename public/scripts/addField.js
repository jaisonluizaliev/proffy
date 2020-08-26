//author Jaison.
/* everything in this script is mixed in portugues and english 
to be understood by me and everyone
!!!!!please ignore the portuguese because I am learning inglish and programming at some time*/
/* chega de complexidade!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
//THE OBJECTIVE IS CLONE NODE FIELDSET with class .schedule-item
//first step: search button #add-time
document.querySelector('#add-time')
//on click in this button
//QUANDO EU CLICAR NO BOTÃO 
//list event to click and create a function duplicate these inputs
//significa escute o evento que sera listado
.addEventListener(/*AQUI DENTRO IRA DUAS PROPRIEDADES! 1 É O EVENTO E OUTRA É A FUNCIONALIDADE*/
  'click', CloneField)

//criando a FUNCIONALIDADE!
function CloneField() { /* what = qual ||which =  quais*/
  //Duplique os campos///quais campos???
  //duplicate the fields///which fields??
  //DUPLIQUE A CLASSE SCHEDULE-ITEM
  //the class selector schedule-item
  const /*fields*/newFieldContainer = document.querySelector('.schedule-item')
  //clone node significa faça uma copia do nó geralmente usado para duplicar elementos html
  //porem se colocado assim vazio ele ira apenas copiar o elemento vazio sem os filhos!
  //por isso é necessario colocar verdadeiro!
  .cloneNode(true)
  //ok mais onde eu coloco essa pagina?
  //CERTO, COLOQUE NA ID SCHEDULE-ITEMS
  const fields = newFieldContainer.querySelectorAll('input')
  //for each field, clean
  fields.forEach(function(field){
    field.value = ""; //limpe o valor padrão / clean and let empty
  }) 

  document.querySelector('#schedule-items')
  //ok mais n funcionou!! sim porque voce deve adicionar este filho com o appendChild
  //AAA!!!
  //Como?
  //ok é assim crie um apprendChild e coloque dentro dele o item que quer que vire um filho!
  .appendChild(newFieldContainer)
  //nice all there, but I want clean all fields...
  //ok let's go!
  //we go change the const fields to newFieldContainer and create new field = let fields
  //and increment all childs input inside newFieldCntainer!
  //ok
  
} 