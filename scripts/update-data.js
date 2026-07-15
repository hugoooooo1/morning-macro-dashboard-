const fs = require("fs");

const report = {
  updateTime: new Date().toLocaleString("fr-FR"),

  riskScore: 7,

  oil: {
    brent: {
      price: 84.3,
      change: 1.4
    },
    wti: {
      price: 81.1,
      change: 1.1
    },
    gold: {
      price: 3350,
      change: 0.5
    }
  },

  markets: {
    sp500: "+0.4%",
    nasdaq: "+0.7%",
    nikkei: "+0.9%",
    shanghai: "+1.1%"
  },

  usa: [
    {
      title: "US inflation remains under scrutiny",
      summary: "Investors await inflation data and Fed comments.",
      url: "https://www.reuters.com"
    }
  ],

  china: [
    {
      title: "China announces economic stimulus",
      summary: "New support package for manufacturing growth.",
      url: "https://www.reuters.com"
    }
  ],

  geopolitics: [
    {
      title: "Middle East tensions continue",
      url: "https://www.reuters.com/world/"
    }
  ]
};

fs.writeFileSync(
  "data.json",
  JSON.stringify(report, null, 2)
);

console.log("Dashboard updated");
