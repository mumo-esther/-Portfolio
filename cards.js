const cards = [
  {
    id: 1,
    title:'Multi-post Stories',
    h3: 'Gain + Glory',
    technologies: 
      {
    react:'React', 
    css: 'Css', 
    javscript: 'JavaScript', 
    html: 'Html'
  },
 description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
 livelink: 'https://app-pokemon-webapp.netlify.app/',
 seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
 seeproject:'see project',
},

{
  id: 2,
  title:'Multi-post Stories',
  h3: 'Gain + Glory',
  technologies: 
    {
  react:'React', 
  css: 'Css', 
  javscript: 'JavaScript', 
  html: 'Html'
},
description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
livelink: 'https://app-pokemon-webapp.netlify.app/',
seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
seeproject:'see project',
},

{
  id: 3,
  title:'Multi-post Stories',
  h3: 'Gain + Glory',
  technologies: 
    {
  react:'React', 
  css: 'Css', 
  javscript: 'JavaScript', 
  html: 'Html'
},
description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
livelink: 'https://app-pokemon-webapp.netlify.app/',
seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
seeproject:'see project',
},

{
  id: 4,
  title:'Multi-post Stories',
  h3: 'Gain + Glory',
  technologies: 
    {
  react:'React', 
  css: 'Css', 
  javscript: 'JavaScript', 
  html: 'Html'
},
description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
livelink: 'https://app-pokemon-webapp.netlify.app/',
seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
seeproject:'see project',
},

{
  id: 5,
  title:'Multi-post Stories',
  h3: 'Gain + Glory',
  technologies: 
    {
  react:'React', 
  css: 'Css', 
  javscript: 'JavaScript', 
  html: 'Html'
},
description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
livelink: 'https://app-pokemon-webapp.netlify.app/',
seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
seeproject:'see project',
},

{
  id: 6,
  title:'Multi-post Stories',
  h3: 'Gain + Glory',
  technologies: 
    {
  react:'React', 
  css: 'Css', 
  javscript: 'JavaScript', 
  html: 'Html'
},
modalTitle:'Keeping track of hundreds of components',
description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
livelink: 'https://app-pokemon-webapp.netlify.app/',
seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
seeproject:'see project',
}
]

const works = document.getElementsByClassName('works')[0];

cards.forEach((card) => {

  let article = document.createElement('article')
  article.className ='card-work';
  works.appendChild(article)

  let cardImage = document.createElement('div')
  cardImage.className = 'card-image'
  article.appendChild(cardImage)

  let cardTitle = document.createElement('h3')
  cardTitle.className = 'card-title'
  let cardTitletext = document.createTextNode(card.title)
  cardTitle.appendChild(cardTitletext)
  article.appendChild(cardTitle)

  let cardh3 = document.createElement('h3')
  article.appendChild(cardh3)
  let cardh3Text = document.createTextNode(card.h3)
  cardh3.appendChild(cardh3Text)


  let cardUl = document.createElement('ul')
  cardUl.className='card-tags'
  article.appendChild(cardUl)

  let liOne = document.createElement('li')
  cardUl.appendChild(liOne)
  let liOneText = document.createTextNode(card.technologies.react)
  liOne.appendChild(liOneText)


  let liTwo = document.createElement('li')
  cardUl.appendChild(liTwo)
  let liTwoText = document.createTextNode(card.technologies.css)
  liTwo.appendChild(liTwoText)

  let liThree = document.createElement('li')
  cardUl.appendChild(liThree)
  let liThreeText = document.createTextNode(card.technologies.javscript)
  liThree.appendChild(liThreeText)

  let liFour = document.createElement('li')
  cardUl.appendChild(liFour)
  let liFourText = document.createTextNode(card.technologies.html)
  liFour.appendChild(liFourText)


  let cardButton = document.createElement('button')
  cardButton.className = 'btn-popup'
  let buttonText = document.createTextNode(card.seeproject)
  cardButton.appendChild(buttonText)
  article.appendChild(cardButton)



  let modal = document.createElement('div')
  modal.className='main'
  article.appendChild(modal)

  let modelContent = document.createElement('div')
  modelContent.className ='modal-content'
  modal.appendChild(modelContent)


  let modalImage = document.createElement('div')
  modalImage.className= 'modal-images'
  modelContent.appendChild(modalImage)

  let modalImageOne = document.createElement('img')
  modalImageOne.className = 'modal-destop-image'
  modalImage.appendChild(modalImageOne)

  let modalImageTwo = document.createElement('img')
  modalImageTwo.className = 'modal-phone-image'
  modalImage.appendChild(modalImageTwo)


  let modalh3 =document.createElement('h3')
  modelContent.appendChild(modalh3)
  let modalh3Text = document.createTextNode()
  modalh3.appendChild(modalh3Text)



  let modalUl = document.createElement('ul')
  cardUl.className='card-tags'
  modelContent.appendChild(modalUl)




/* modal links*/
let modalliOne = document.createElement('li')
modalUl.appendChild(modalliOne)
let modalliOneText = document.createTextNode(card.technologies.codekit)
modalliOne.appendChild(modalliOneText)


let modalliTwo = document.createElement('li')
modalUl.appendChild(modalliTwo)
let modalliTwoText = document.createTextNode(card.technologies.github)
modalliTwo.appendChild(modalliTwoText)

let modalliThree = document.createElement('li')
modalUl.appendChild(modalliThree)
let modalliThreeText = document.createTextNode(card.technologies.javscript)
modalliThree.appendChild(modalliThreeText)

let modalliFour = document.createElement('li')
modalUl.appendChild(modalliFour)
let modalliFourText = document.createTextNode(card.technologies.bootstrap)
modalliFour.appendChild(modalliFourText)

let modalliFive = document.createElement('li')
modalUl.appendChild(modalliFive)
let modalliFiveText = document.createTextNode(card.technologies.terminal)
modalliFive.appendChild(modalliFiveText)


let modalliSix = document.createElement('li')
modalUl.appendChild(modalliSix)
let modalliSixText = document.createTextNode(card.technologies.codepen)
modalliSix.appendChild(modalliSixText)


});
