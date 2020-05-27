// Write your JavaScript code here!
// let pilotStatus = document.getElementById("pilotStatus");
// let copilotStatus = document.getElementById("copilotStatus");
// let fuelStatus = document.getElementById("fuelStatus");
// let cargoStatus = document.getElementById("cargoStatus");
// let pilotName = document.getElementById("pilotName");
// let copilotName = document.getElementById("copilotName");
// let fuelLevel = document.getElementById("fuelLevel");
// let cargoMass = document.getElementById("cargoMass");
// let launchStatus = document.getElementById("launchStatus");

window.addEventListener("load", function () {
   let launchForm = document.querySelector("form");
   launchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please enter a number for fuel and cargo")
      }
      else {
         let launchStatus = document.getElementById("launchStatus");
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value}: pilot ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value}: copilot ready`;
         if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "There is not enough fuel for the journey."
            cargoStatus.innerHTML = "Acceptable Weight"
         }
         else if (cargoMass.value > 10000 && fuelLevel.value > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
            fuelStatus.innerHTML = "There is enough fuel for the journey."
         }
         else if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
            fuelStatus.innerHTML = "There is not enough fuel for the journey."
         }
         else {
            document.getElementById("faultyItems").style.visibility = "hidden";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
         };
      };
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let mT = document.getElementById("missionTarget");
         mT.innerHTML =`
            <h1>Mission Destination</h1>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}"></img>
            `
      });
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
