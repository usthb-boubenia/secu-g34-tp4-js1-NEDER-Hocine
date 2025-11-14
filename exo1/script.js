"use strict";
// Activates strict mode (slide 141) → helps catch errors (undeclared variables, bad syntax, etc.) 

// ----- Functions (slide 46) that print values to the console -----

// Prints a name
const f1 = () => {
  console.log("John");
  // display message to the console (slide 33)
};

// Prints a surname
const f2 = () => {
  console.log("Doe");
};

// Prints full name
const f3 = () => {
  console.log("John-Doe");
};

// Prints age
const f4 = () => {
  console.log(30);
};

// Prints grade
const f5 = () => {
  console.log(15);
};

// Prints Pi
const f6 = () => {
  console.log(3.14);
};

// ----- Event listeners (slide 136) -----  
// Each button runs the corresponding function when clicked.

// Click button "Nom"
document.getElementById("nom").addEventListener("click", f1);

// Click button "Prénom"
document.getElementById("prenom").addEventListener("click", f2);

// Click button "Nom & Prénom"
document.getElementById("nom-prenom").addEventListener("click", f3);

// Click button "Age"
document.getElementById("age").addEventListener("click", f4);

// Click button "Note"
document.getElementById("note").addEventListener("click", f5);

// Click button "Pi"
document.getElementById("pi").addEventListener("click", f6);