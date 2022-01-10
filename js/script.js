console.log('%cDeveloped by Djigit & yur4ik96', 'color: #c434c4; font-size: 50px ');

console.log(
  '%cTG: @Djigit34 / @yura_k18',
  'color: #c434c4; background: #eee; font-size: 30px '
);

const body = document.querySelector("body")

const headerNav = document.querySelector(".header__nav-container")
const headerNavOpener = document.querySelector(".header__nav-opener")


headerNavOpener.addEventListener("click",()=>{
  headerNav.classList.contains("active") ? headerNav.classList.remove("active") : headerNav.classList.add("active")
  headerNav.classList.contains("active") ? headerNavOpener.classList.add("active") : headerNavOpener.classList.remove("active")
  headerNav.classList.contains("active") ? body.classList.add("no-scroll") : body.classList.remove("no-scroll")
})