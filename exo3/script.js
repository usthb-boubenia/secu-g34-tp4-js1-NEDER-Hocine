"use strict";
// Activates strict mode (slide 141) → helps catch errors (undeclared variables, bad syntax, etc.) 

// ----- Functions (slide 46) that print values to the console -----

// data array of objects
const students = [
    {
      matricule: 1000,
      nom: "JOHN",
      prenom: "DOE",
      moyen: 14.5
    },
    {
      matricule: 2000,
      nom: "BOB",
      prenom: "CARLTON",
      moyen: 7.1
    },
    {
      matricule: 3000,
      nom: "RAYANE",
      prenom: "SMITH",
      moyen: 13.3
    }
  ];

// Prints the results of deliberation based on the data
const f1 = () => {
  for (let student of students) {
    // condition (slide 42)
    if (f2(student.moyen)) {
      console.log(`${student.matricule}: ADMIS`);
    } else {
      console.log(`${student.matricule}: AJOURNÉ`);
    }
  }
};

const f2 = moyen => {
  if (moyen > 10) {
    return true;
  }
  return false
}

// ----- Event listeners (slide 136) -----  
// Each button runs the corresponding function when clicked.

// Click button "Délibération"
document.getElementById("deliberation").addEventListener("click", f1);