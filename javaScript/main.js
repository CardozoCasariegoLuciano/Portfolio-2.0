const btnMenu = document.getElementById("btn-menu");
const navMenu = document.getElementById("nav-menu");

const linkHome = document.getElementById("link-home");
const linkAbout = document.getElementById("link-about");
const linkSkills = document.getElementById("link-skills");
const linkProjects = document.getElementById("link-projects");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

linkHome.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

linkProjects.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

linkSkills.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});

linkAbout.addEventListener("click", () => {
  navMenu.classList.toggle("showMenu");
});
