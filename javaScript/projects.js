const REACT = "REACT"
const HTML = "HTML"
const CSS = "CSS"
const JS = "JS"
const MONGO = "MONGODB"
const MYSQL = "MYSQL"
const NODE= "NODE"
const JEST= "JEST"
const REDUX= "REDUX"
const TS = "TS"
const SASS = "SASS"

const projectsList = [
  {
    image: "./assets/captures/giffy.png",
    title: "Giffy",
    description: "An App to search and view gifs <br/><br/> API: GIPHY",
    github: "https://github.com/CardozoCasariegoLuciano/giffy-react",
    url: "http://lucianocardozocasariego.com.ar/giffy/",
    techs: [REACT, CSS]
  },
  {
    image: "./assets/captures/api.jpg",
    title: "Video Games store API",
    description: "An API to show the stock of videogames of a game store",
    github: "https://github.com/CardozoCasariegoLuciano/VideoGamesApp_Backend",
    techs: [NODE, MONGO, JEST]
  },
  {
    image: "./assets/captures/MoviesApp.png",
    title: "Movies App",
    description: "An App to see, add and import Movies descriptions",
    github: "https://github.com/CardozoCasariegoLuciano/MovieApp_Node_React_Mysql",
    techs: [NODE, MYSQL, REACT]
  },
  {
    image: "./assets/captures/generala.png",
    title: "Generala game",
    description: "Generala game created for a university project",
    github: "https://github.com/CardozoCasariegoLuciano/Generala_React",
    url: "http://lucianocardozocasariego.com.ar/generala/",
    techs: [REACT, SASS]
  },
  {
    image: "./assets/captures/Weather.png",
    title: "Weather app",
    description: "A simple app created using vanilla technologies <br/><br/> API: Open-weather",
    github: "https://github.com/CardozoCasariegoLuciano/Open-weather",
    url: "http://lucianocardozocasariego.com.ar/weather/",
    techs: [HTML, CSS, JS]
  },
];


const generateIcons = (techs) => {
  let icons = ``
  techs.forEach((tech) => {
    switch (tech) {
      case 'REACT':
        return icons+=`<img class="card_techUsed card_react_icon" src="./assets/icons/react.svg" alt="react icon"/>`

      case 'HTML':
        return icons+=`<img class="card_techUsed" src="./assets/icons/html.svg" alt="html icon"/>`

      case 'CSS':
        return icons+=`<img class="card_techUsed" src="./assets/icons/css.svg" alt="css icon"/>`

      case 'JS':
        return icons+=`<img class="card_techUsed" src="./assets/icons/javascript.svg" alt="JavaScript icon"/>`

      case 'MONGODB':
        return icons+=`<img class="card_techUsed" src="./assets/icons/mongodb.svg" alt="MongoDB icon"/>`

      case 'MYSQL':
        return icons+=`<img class="card_techUsed" src="./assets/icons/mysql.svg" alt="MySQL icon"/>`

      case 'NODE':
        return icons+=`<img class="card_techUsed" src="./assets/icons/nodejs.svg" alt="Node icon"/>`

      case 'JEST':
        return icons+=`<img class="card_techUsed" src="./assets/icons/jest.svg" alt="Jest icon"/>`

      case 'REDUX':
        return icons+=`<img class="card_techUsed" src="./assets/icons/redux.svg" alt="Redux icon"/>`

      case 'TS':
        return icons+=`<img class="card_techUsed" src="./assets/icons/typescript.svg" alt="TypeScript icon"/>`

 			case 'SASS':
        return icons+=`<img class="card_techUsed" src="./assets/icons/sass.svg" alt="TypeScript icon"/>`
      
      default:
        return ``
    }
  })
  return icons
}

const projectsRoot = document.getElementById("projects_root");

projectsList.forEach((prj) => {
  newProject = 
      `<div class="project_card">` +
            `<img class="card_imagen" src=${prj.image} alt="Project image"/>` +
            `<div class="card_content">` +
              `<h3 class="card_title">${prj.title}</h3>` +
              `<p class="card_description"> ${prj.description}  </p>` +
              `<div class="card_techSections">` +
                 `${generateIcons(prj.techs)}` +
              `</div>` +
              `<div class="card_linksSections">` +
                `<a class="card_github" href=${prj.github} target="_blank">` + 
                      `View code` +
                `</a>` +
                  `${prj.url ? `<a class="card_view" href=${prj.url} target="_blank"> Visit project </a>`: ""}` +
              `</div>` +
            `</div>` +
      `</div>`

  projectsRoot.innerHTML += newProject;

});
