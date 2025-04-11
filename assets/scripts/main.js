let menu = document.getElementById("menu");
let themeBtn = document.getElementById("theme-btn");
let menuBtn = document.getElementById("menu-btn");
let menuIcon = document.getElementById("menu-icon");
let themeIcon = document.getElementById("theme-icon");
let menuLinks = document.querySelectorAll("#menu li a")


menuLinks.forEach((ele)=>{
  ele.onclick = function (){
      menuLinks.forEach((element)=>{
          element.classList.remove("active");
      })
      this.classList.add("active");
  }
  
})

menuBtn.onclick = () => {
  menu.classList.toggle("menu");
  if (menu.classList.contains("menu")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
};

let darkMode = () => {
  document.body.classList.add("dark-theme");
  themeIcon.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("theme", "dark");
};

let lightMode = () => {
  document.body.classList.remove("dark-theme");
  themeIcon.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("theme", "light");
};

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  darkMode()
} else {
  lightMode()
}

themeBtn.onclick = () => {
const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    lightMode()
  } else {
    darkMode()
  }
};
