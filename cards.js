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
description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the relea',
livelink: 'https://app-pokemon-webapp.netlify.app/',
seesourcelink: 'https://app-pokemon-webapp.netlify.app/',
}
]

const works = document.getElementById('works');

for (let i = 0; i < 6; i++) {
  const div = document.createElement('div');
  works.appendChild(div);
  div.innerHTML = `
            <article class="card-work">
                <div class="card-image">
                </div>
                <h3 class="card-title">
                 ${titleArray[0]}
                </h3>
                <h3>
                    ${h3Array[0]}
                </h3>
                <ul class="card-tags">
                    <li>${langArray[0]}</li>
                    <li>${langArray[1]}</li>
                    <li>${langArray[2]}</li>
                    <li>${langArray[3]}</li>
                </ul>
                <button type="button" class="btn-popup">
                    See Project
                </button>
            </article>`;
}

const popupImage = ['desktoppopup', 'mobilepopup']
const popupH2 = [['Keeping track of hundreds of', 'components']]
const popupTags = ['Codekit','Github','JavaScript', 'Bootsrap', 'Codepen', 'Terminal']
// desktop popup

const popbtn = document.querySelectorAll('.btn-popup');
popbtn.forEach((n) => {
  n.addEventListener('click', () => {
    const main = document.createElement('div');
    main.className = 'main';
    const desktoppopup = document.createElement('div');
    desktoppopup.className = 'popup';
    main.innerHTML = `
    <div class="popupclose-btn" id="popupclose-btn">
    <button class="close" >
     <i class=" fa fa-times"></i>
     </button>
     </div>
                <div>
                  <img src="./images/desktop popup.png" alt="pop-up window image"
                   class="popupcard-image">
                </div>
                <div class="title">
                <h2 class="popupcard-title">
                   ${popupH2[0][0]}
                     <br>
                      ${popupH2[0][1]}
                </h2>
                <div class="titleright">
                 <a href="">
                <button class="popupbtns" type="button">
                    See Live<img src="./images/seelive.png" alt="live icon">
                </button>
                </a>
                <a href="">
                <button class="popupbtns" type="button">
                  See Source <img src="./images/white-github.png" alt="github icon">
                </button>
                </a>
                </div>
                </div>
                <ul class="popupcard-tags">
                    <li>${popupTags[0]}</li>
                    <li>${popupTags[1]}</li>
                    <li>${popupTags[2]}</li>
                    <li>${popupTags[3]}</li>
                    <li>${popupTags[4]}</li>
                    <li>${popupTags[5]}</li>
                </ul>
                <h6 class="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                </h6>
              `;
    main.appendChild(desktoppopup);
    works.appendChild(main);
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
      main.classList.remove('.popup');
    });
  });
});
