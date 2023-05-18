const cards = [
  {
    id: 1,
    img: "./images/stem-img.PNG",
    title: "STEM Congress",
    h3: "HTML, CSS, Basic js capstone",
    technologies: {
      react: "React",
      css: "Css",
      javscript: "JavaScript",
      html: "Html",
      Github: "Github",
      bootstrap: "Bootstrap",
      terminal: "Terminal",
    },
    seelive: "see live",
    source: "source",
    description:
      "This website is an announcement for the upcoming congress. The congress will be held within The University of Nairobi. General information about the club and the conference is given throughout the site. Speakers are introduced in a separate section. In addition, a form page is defined for participants who want to buy tickets.",
    livelink: "https://mumo-esther.github.io/microverse-capstone-1/",
    seesourcelink: "https://github.com/mumo-esther/microverse-capstone-1",
    seeproject: "see project",
    modalh3:
      " In particular, I would like to point out that I built this website completely from scratch.",
    modalimage1: "images/seelive.png",
    modalimage2: "images/white-github.png",
    desktopsnapshoot: "./images/stem home page.PNG",
    mobilesnapshoot: "./images/mobile-stem screenshot.PNG",
  },

  {
    id: 2,
    img: "./images/weather-dashboard.PNG",
    title: "  Weather Dashboard",
    h3: "Vanilla Js capstone project",
    technologies: {
      html: "Html",
      react: "React",
      css: "Css",
      javscript: "JavaScript",
      Github: "Github",
      terminal: "Terminal",
    },
    seelive: "see live",
    source: "source",
    description:
      "Weather Dashboard is a weather application which displays the weather of cities in the form of list from Openweathermap API.",
    livelink: "https://muhammadusmanaslam.github.io/Weather-Dashboard/dist/",
    seesourcelink: "https://github.com/mumo-esther/Weather-Dashboard.git",
    seeproject: "see project",
    modalh3: "Keeping track of hundreds of components",
    modalimage1: "images/seelive.png",
    modalimage2: "images/white-github.png",
    desktopsnapshoot: "./images/weather comments.PNG",
    mobilesnapshoot: "./images/weather comments.PNG",
  },

  {
    id: 3,
    img: "./images/desktohome.PNG",
    title: "Crypto App",
    h3: " Cryptocurrencies data",
    technologies: {
      react: "React",
      css: "Css",
      javscript: "JavaScript",
      html: "Html",
      ror: "Ruby on Rails",
      codekit: "Codekit",
      Github: "Github",
      bootstrap: "Bootstrap",
      terminal: "Terminal",
      codepen: "Codepen",
    },
    seelive: "see live",
    source: "source",
    description:
      "This Project, divided into several parts, is very comprehensive, and covers all main concepts about React, from the very basics to some intermediate topics. Todo App, Form and also a react hamburger menu",
    livelink: "https://react-todos-ibas.vercel.app/",
    seesourcelink: "https://github.com/mumo-esther/React-todo-App.git",
    seeproject: "see project",
    modalh3: "Keeping track of hundreds of components",
    modalimage1: "images/seelive.png",
    modalimage2: "images/white-github.png",
    desktopsnapshoot: "./images/mobiledetails.PNG",
    mobilesnapshoot: "./images/mobile.homepage.PNG",
  },

  {
    id: 4,
    img: "./images/calculator.png",
    title: "Math Magicians",
    h3: "SPA With calulator",
    technologies: {
      react: "React",
      css: "Css",
      javscript: "JavaScript",
      html: "Html",
      ror: "Ruby on Rails",
      codekit: "Codekit",
      Github: "Github",
      bootstrap: "Bootstrap",
      terminal: "Terminal",
      codepen: "Codepen",
    },
    seelive: "see live",
    source: "source",
    description:
      "The Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.",
    livelink: "https://math-magician-seven.vercel.app/",
    seesourcelink: "https://app-pokemon-webapp.netlify.app/",
    seeproject: "see project",
    modalh3: "Keeping track of hundreds of components",
    modalimage1: "images/seelive.png",
    modalimage2: "images/white-github.png",
    desktopsnapshoot: "./images/math_magicians_home.png",
    mobilesnapshoot: "./images/math_magicians_home.png",
  },

  {
    id: 5,
    img: "./images/rockets.PNG",
    title: "Space traveller's Hub",
    h3: "Space Traveller's Hub",
    technologies: {
      react: "React",
      css: "Css",
      javscript: "JavaScript",
      html: "Html",
      ror: "Ruby on Rails",
      codekit: "Codekit",
      Github: "Github",
      bootstrap: "Bootstrap",
      terminal: "Terminal",
      codepen: "Codepen",
    },
    seelive: "see live",
    source: "source",
    description:
      "This is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. The application uses live data from the SpaceX API.",
    livelink: "https://space-travellers-hub-cvy1.onrender.com/",
    seesourcelink:
      "https://github.com/mumo-esther/React-group-project-space-travellers-hub.git",
    seeproject: "see project",
    modalh3: "Keeping track of hundreds of Space Ships",
    modalimage1: "images/seelive.png",
    modalimage2: "images/white-github.png",
    desktopsnapshoot: "./images/missions.PNG",
    mobilesnapshoot: "./images/missions.PNG",
  },

  {
    id: 6,
    img: "./images/leaderboard.PNG",
    title: "Leaderboard",
    h3: "ES6 + Webpack",
    technologies: {
      react: "React",
      css: "Css",
      javscript: "JavaScript",
      html: "Html",
      Github: "Github",
      bootstrap: "Bootstrap",
      terminal: "Terminal",
    },
    seelive: "see live",
    source: "source",
    description:
      "The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service This is built using ES6 and Webpack!",
    livelink: "https://leaderboard-mutf.onrender.com",
    seesourcelink: "https://github.com/mumo-esther/Leaderboard.git",
    seeproject: "see project",
    modalh3: "Keeping track of hundreds of components",
    modalimage1: "images/seelive.png",
    modalimage2: "images/white-github.png",
    desktopsnapshoot: "./images/leaderboard.PNG",
    mobilesnapshoot: "./images/leaderboard.PNG",
  },
];

const works = document.getElementsByClassName("works")[0];

cards.forEach((card) => {
  const article = document.createElement("article");
  article.className = "card-work";
  works.appendChild(article);

  const cardImage = document.createElement("div");
  cardImage.className = "card-image";
  cardImage.style.backgroundImage = `url(${card.img})`;
  article.appendChild(cardImage);

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  const cardTitletext = document.createTextNode(card.title);
  cardTitle.appendChild(cardTitletext);
  article.appendChild(cardTitle);

  const cardh3 = document.createElement("h3");
  article.appendChild(cardh3);
  const cardh3Text = document.createTextNode(card.h3);
  cardh3.appendChild(cardh3Text);

  const cardUl = document.createElement("ul");
  cardUl.className = "card-tags";
  article.appendChild(cardUl);

  const liOne = document.createElement("li");
  cardUl.appendChild(liOne);
  const liOneText = document.createTextNode(card.technologies.react);
  liOne.appendChild(liOneText);

  const liTwo = document.createElement("li");
  cardUl.appendChild(liTwo);
  const liTwoText = document.createTextNode(card.technologies.css);
  liTwo.appendChild(liTwoText);

  const liThree = document.createElement("li");
  cardUl.appendChild(liThree);
  const liThreeText = document.createTextNode(card.technologies.javscript);
  liThree.appendChild(liThreeText);

  const liFour = document.createElement("li");
  cardUl.appendChild(liFour);
  const liFourText = document.createTextNode(card.technologies.html);
  liFour.appendChild(liFourText);

  const cardButton = document.createElement("button");
  cardButton.className = "btn-popup";
  const buttonText = document.createTextNode(card.seeproject);
  cardButton.appendChild(buttonText);
  article.appendChild(cardButton);

  const modal = document.createElement("div");
  modal.className = "main";
  article.appendChild(modal);

  const modelContent = document.createElement("div");
  modelContent.className = "modal-content";
  modal.appendChild(modelContent);

  const closeDiv = document.createElement("div");
  closeDiv.className = "popupclose-btn";
  modelContent.appendChild(closeDiv);

  const closebtn = document.createElement("button");
  closebtn.className = "close";
  closebtn.id = "close";
  closeDiv.appendChild(closebtn);
  closebtn.innerHTML = "&times;";

  const modalImage = document.createElement("div");
  modalImage.className = "modal-images";
  modelContent.appendChild(modalImage);

  const modalImageOne = document.createElement("img");
  modalImageOne.className = "modal-destop-image";
  modalImageOne.src = card.desktopsnapshoot;
  modalImage.appendChild(modalImageOne);

  const modalImageTwo = document.createElement("img");
  modalImageTwo.className = "modal-phone-image";
  modalImageTwo.src = card.mobilesnapshoot;
  modalImage.appendChild(modalImageTwo);

  const h3buttons = document.createElement("div");
  h3buttons.className = "title";
  modelContent.appendChild(h3buttons);

  const modalh3 = document.createElement("h3");
  h3buttons.appendChild(modalh3);
  const modalh3Text = document.createTextNode(card.modalh3);
  modalh3.appendChild(modalh3Text);

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "titleright";
  h3buttons.appendChild(buttonDiv);

  const titlebutton1 = document.createElement("button");
  const tittlebutton1text = document.createTextNode(card.seelive);
  // Add a click listener to the button
  titlebutton1.addEventListener("click", function () {
    window.location.href = card.livelink;
  });
  titlebutton1.appendChild(tittlebutton1text);
  const Bimage1 = document.createElement("img");
  Bimage1.src = card.modalimage1;
  titlebutton1.appendChild(Bimage1);
  buttonDiv.appendChild(titlebutton1);

  const titlebutton2 = document.createElement("button");
  const tittlebutton2text = document.createTextNode(card.source);
  // Add a click listener to the button
  titlebutton2.addEventListener("click", function () {
    window.location.href = card.seesourcelink;
  });

  titlebutton2.appendChild(tittlebutton2text);
  const Bimage2 = document.createElement("img");
  Bimage2.src = card.modalimage2;

  titlebutton2.appendChild(Bimage2);
  buttonDiv.appendChild(titlebutton2);

  const modalUl = document.createElement("ul");
  modalUl.className = "popupcard-tags";
  modelContent.appendChild(modalUl);

  /* modal links */
  const modalliOne = document.createElement("li");
  modalUl.appendChild(modalliOne);
  const modalliOneText = document.createTextNode(card.technologies.codekit);
  modalliOne.appendChild(modalliOneText);

  const modalliTwo = document.createElement("li");
  modalUl.appendChild(modalliTwo);
  const modalliTwoText = document.createTextNode(card.technologies.Github);
  modalliTwo.appendChild(modalliTwoText);

  const modalliThree = document.createElement("li");
  modalUl.appendChild(modalliThree);
  const modalliThreeText = document.createTextNode(card.technologies.javscript);
  modalliThree.appendChild(modalliThreeText);

  const modalliFour = document.createElement("li");
  modalUl.appendChild(modalliFour);
  const modalliFourText = document.createTextNode(card.technologies.bootstrap);
  modalliFour.id = "bootstrap";
  modalliFour.appendChild(modalliFourText);

  const modalliFive = document.createElement("li");
  modalUl.appendChild(modalliFive);
  const modalliFiveText = document.createTextNode(card.technologies.terminal);
  modalliFive.id = "terminal";
  modalliFive.appendChild(modalliFiveText);

  const modalliSix = document.createElement("li");
  modalUl.appendChild(modalliSix);
  const modalliSixText = document.createTextNode(card.technologies.codepen);
  modalliSix.id = "codepen";
  modalliSix.appendChild(modalliSixText);

  const modalDetails = document.createElement("p");
  modalDetails.className = "card-text";
  modelContent.appendChild(modalDetails);

  const cardText = document.createTextNode(card.description);
  modalDetails.appendChild(cardText);

  const rbuttonDiv = document.createElement("div");
  rbuttonDiv.className = "titleright-phone";
  modalDetails.appendChild(rbuttonDiv);

  const rtitlebutton1 = document.createElement("button");
  const rtittlebutton1text = document.createTextNode(card.seelive);
  rtitlebutton1.appendChild(rtittlebutton1text);
  const rBimage1 = document.createElement("img");
  rBimage1.src = card.modalimage1;
  rtitlebutton1.appendChild(rBimage1);
  rbuttonDiv.appendChild(rtitlebutton1);

  const rtitlebutton2 = document.createElement("button");
  const rtittlebutton2text = document.createTextNode(card.source);
  rtitlebutton2.appendChild(rtittlebutton2text);
  const rBimage2 = document.createElement("img");
  rBimage2.src = card.modalimage2;

  rtitlebutton2.appendChild(rBimage2);
  rbuttonDiv.appendChild(rtitlebutton2);

  const buttons = document.querySelectorAll(".btn-popup");

  const modals = document.querySelectorAll(".main");

  const modalClose = document.querySelectorAll(".close");

  const manalNav = function vera() {
    modals.forEach(() => {});
  };

  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manalNav(i);
      modals[i].style.display = "block";
    });
  });

  modalClose.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      manalNav(i);
      modals[i].style.display = "none";
    });
  });
});
