console.log("Hello World");
fetch("http://localhost:3000/footballteams")
  .then((response) => response.json())
  .then((json) => console.log(json));
let dropdown = document.getElementById("football-teams");
dropdown.length = 0;
let defaultOption = document.createElement("option");
defaultOption.text = " Select Team";
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;
const url = "http://localhost:3000/footballteams";
fetch(url).then(function (response) {
  return response.json().then(function (data) {
    let option;

    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      option.value = data[i].abbreviation;
      dropdown.add(option);
    }
  });
});
