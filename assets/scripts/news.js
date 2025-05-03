let news = [
  {
    image: "assets/images/news-image1.png",
    date: "Monday 05, September 2021",
    auther: "By Author",
    title: "This Article’s Title goes Here,<br />but not too long.",
    views: 68,
    likes: 86,
  },
  {
    image: "assets/images/news-image1.png",
    date: "Monday 05, September 2021",
    auther: "By Author",
    title: "This Article’s Title goes Here,<br />but not too long.",
    views: 68,
    likes: 86,
  },
  {
    image: "assets/images/news-image1.png",
    date: "Monday 05, September 2021",
    auther: "By Author",
    title: "This Article’s Title goes Here,<br />but not too long.",
    views: 68,
    likes: 86,
  },
  {
    image: "assets/images/news-image1.png",
    date: "Monday 05, September 2021",
    auther: "By Author",
    title: "This Article’s Title goes Here,<br />but not too long.",
    views: 68,
    likes: 86,
  },
];

let newsList = "";
function getNews() {
  for (let i = 0; i < news.length; i++) {
    newsList += `
            <div class="news-card">
              <img src=${news[i].image} alt="News" class="news-image" />
              <div class="news-content">
                <p>${news[i].date} | ${news[i].auther}</p>
                <h3>${news[i].title}</h3>
                <div class="news-meta">
                  <div class="views"><i class="fa-solid fa-eye"></i><span>${news[i].views}</span></div>
                  <div class="likes"><i class="fa-regular fa-heart"></i><span>${news[i].likes}</span></div>
                </div>
              </div>
            </div>
    `;
  }
  document.getElementById("news-list").innerHTML = newsList;
}
getNews();