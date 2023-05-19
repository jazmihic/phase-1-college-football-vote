console.log("Hello World");
fetch("http://localhost:3000/footballteams")
  .then((response) => response.json())
  .then((json) => console.log(json));

const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByTeam");

    console.log(input.value);

    fetch(
      "https://api.sportsdata.io/v3/cfb/scores/json/Teams?key=50f62ae419ea48078a9625733360b999"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
