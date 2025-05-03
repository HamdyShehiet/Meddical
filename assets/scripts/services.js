
let services = [
  {
    id:1,
    image: "assets/images/services-image3.png",
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id:2,
    image: "assets/images/services-image3.png",
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id:3,
    image: "assets/images/services-image3.png",
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id:4,
    image: "assets/images/services-image3.png",
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id:5,
    image: "assets/images/services-image3.png",
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
  {
    id:6,
    image: "assets/images/services-image3.png",
    title: "Free Checkup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
  },
];

let servicesList = "";
function getServices() {
  for (let i = 0; i < services.length; i++) {
    servicesList += `
          <div class="service-card">
            <a href="singleService.html" class="service-image">
              <div class="service-overlay-hovered items-center justify-center">
                <img src="assets/icons/service-bandage1.png" alt="Bandage Icon">
              </div>
              <div class="service-overlay flex items-center justify-center">
                <img src="assets/icons/service-bandage2.png" alt="Bandage Icon">
              </div>
              <img src=${services[i].image} alt=${services[i].title}">
            </a>
            <div class="service-content flex-column">
              <span class="service-title">${services[i].title}</span>
              <p class="description">${services[i].description}</p>
              <a href="singleService.html" class="learn-more primary-link">
                <span>Learn More</span>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>          
    `;
  }
  document.getElementById("services-list").innerHTML = servicesList ;
}
getServices();