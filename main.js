console.log("Hello World");
fetch("http://localhost:3000/footballteams")
  .then((response) => response.json())
  .then((json) => console.log(json));
