// Write your JavaScript code here!
window.addEventListener("load", function() {

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      document.getElementById("pilotStatus").innerHTML = `${pilotName} ready.`;
      document.getElementById("copilotName").innerHTML = `${copilotName} ready`;

      if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass === '') {
         alert("All fields are required!");
      }

      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Enter valid name.");
      }

      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Enter a valid number.");
      }

      if (fuelLevel.value < 10000) {         
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "Not enough fuel.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      }

      if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "Too much mass for launch.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
         document.getElementById("launchStatus").style.color = "red";
      }

      if (fuelLevel.value >= 10000 && cargoMass <= 10000) {
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
         

      }
      
   })
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById('missionTarget');
         div.innerHTML = `
         <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[0].image}"></img>`;
      })
   })   
});