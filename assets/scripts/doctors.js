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

let doctorsList = "";
function getDoctors() {
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
getDoctors();