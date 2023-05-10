console.log("Hello World");
fetch(
  "https://api.sportsdata.io/v3/cfb/scores/json/Teams?key=50f62ae419ea48078a9625733360b999"
)
  .then((response) => response.json())
  .then((json) => console.log(json));
