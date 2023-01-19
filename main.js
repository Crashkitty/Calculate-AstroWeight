// Write your JavaScript code here!
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

planets.forEach(function(element) { 
    var arrayElements = document.createElement("option");
    arrayElements.innerHTML = element[0]; 
    document.getElementById("planets").appendChild(arrayElements);
});

function calculateWeight(weight, planetName){
    for(var a=0; a < planets.length; a++){
      if(planetName === planets[a][0]){
        var gravity = planets[a][1];
      };
    };
    return weight * gravity;
 };

 function handleClickEvent(e) {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerHTML = 'If you are on ' + planetName + ', you would weigh ' + result + 'lbs!';;
  }
  document.getElementById('calculate-button').onclick = handleClickEvent;