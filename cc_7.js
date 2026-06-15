let input = document.getElementById("headlineInput");
let button = document.getElementById("updateButton");
let headline = document.getElementById("cta");

button.addEventListener("click", function() {

    headline.textContent = input.value;

});