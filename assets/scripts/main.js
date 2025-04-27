let menu = document.getElementById("menu");
let themeBtn = document.getElementById("theme-btn");
let menuBtn = document.getElementById("menu-btn");
let menuIcon = document.getElementById("menu-icon");
let themeIcon = document.getElementById("theme-icon");
let menuLinks = document.querySelectorAll("#menu li a");

menuLinks.forEach((ele) => {
  ele.onclick = function () {
    menuLinks.forEach((element) => {
      element.classList.remove("active");
    });
    this.classList.add("active");
    menu.classList.remove("menu");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  };
});

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
  darkMode();
} else {
  lightMode();
}

themeBtn.onclick = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    lightMode();
  } else {
    darkMode();
  }
};


let doctors = [
  {
    image: "assets/images/doctor1.png",
    name: "Doctor's Name",
    specialty: "CARDIOLOGY",
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/?locale=ar_AR",
    instagram: "https://www.instagram.com/",
  },
  {
    image: "assets/images/doctor2.png",
    name: "Doctor's Name",
    specialty: "CARDIOLOGY",
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/?locale=ar_AR",
    instagram: "https://www.instagram.com/",
  },
  {
    image: "assets/images/doctor3.png",
    name: "Doctor's Name",
    specialty: "CARDIOLOGY",
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/?locale=ar_AR",
    instagram: "https://www.instagram.com/",
  },
  {
    image: "assets/images/doctor1.png",
    name: "Doctor's Name",
    specialty: "CARDIOLOGY",
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/?locale=ar_AR",
    instagram: "https://www.instagram.com/",
  },
  {
    image: "assets/images/doctor2.png",
    name: "Doctor's Name",
    specialty: "CARDIOLOGY",
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/?locale=ar_AR",
    instagram: "https://www.instagram.com/",
  },
  {
    image: "assets/images/doctor3.png",
    name: "Doctor's Name",
    specialty: "CARDIOLOGY",
    linkedIn: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/?locale=ar_AR",
    instagram: "https://www.instagram.com/",
  },
];
function getDoctors(){
  let doctorsList = "";
  for (let i = 0; i < doctors.length; i++) {
    doctorsList += `
                <div class="doctor-card">
                <img src=${doctors[i].image} alt="Doctor" class="doctor-image" />
                <div class="doctor-info">
                  <span>${doctors[i].name}</span>
                  <h3 class="doctor-specialty">${doctors[i].specialty}</h3>
                  <ul class="social-icons">
                    <li>
                      <a href=${doctors[i].linkedIn} target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </li>
                    <li>
                      <a href=${doctors[i].facebook} target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href=${doctors[i].instagram} target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
                <a href="#" class="view-profile">View Profile</a>
              </div>
    `;
  }
  document.getElementById("doctors-list").innerHTML = doctorsList;
}
getDoctors()