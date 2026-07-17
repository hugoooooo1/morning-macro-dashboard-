const fs = require("fs");

const API_KEY = "f282896cc09d42f8be3f398008d95c0c";

async function getNews(query) {
  const url =
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&pageSize=5&sortBy=publishedAt&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.articles.map(article => ({
    title: article.title,
    summary: article.description || "No summary available",
    url: article.url
  }));
}

async function updateDashboard() {

  const usaNews = await getNews("US economy");
  const chinaNews = await getNews("China economy");

  const report = {
    updateTime: new Date().toLocaleString("fr-FR"),

    oil: {
      brent: {
        price: 84.3,
        change: 1.4
      },
      wti: {
        price: 81.1,
        change: 1.1
      }
    },

    usa: usaNews,
    china: chinaNews
  };

  fs.writeFileSync(
    "data.json",
    JSON.stringify(report, null, 2)
  );

  console.log("Dashboard updated");
}

updateDashboard();
