// Content Block 7
const container = document.querySelector('.hover-container');
const text = document.querySelector('.hover-text');

// Constant variable with empty array
const locations = [];

// Assigning elements in array
locations[0] = "California"
locations[1] = "Paris"
locations[2] = "Madagascar"
locations[3] = "Japan"
locations[4] = "Mexico"
locations[5] = "Toronto"
locations[6] = "Barcelona"
locations[7] = "Rome"
locations[8] = "Thailand"
locations[9] = "Spain"
locations[10] = "Santorini"
locations[11] = "Iceland"
locations[12] = "Austrailia"

// Generating random location from array
function locationFinder(){
  let length = locations.length;
  let num = Math.floor(Math.random() * length);

  // Connects HTML & JS
  let destination = document.getElementById("compass");

  // Populates p tag with random generated location 
  // variable, attribute, value
  destination.innerHTML = locations[num];
}



container.addEventListener('mouseenter', function () {
  text.style.opacity = '1'; // Show text on hover
});

container.addEventListener('mouseleave', function () {
  text.style.opacity = '0'; // Hide text when not hovering
});