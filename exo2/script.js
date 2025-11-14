"use strict";
// Activates strict mode (slide 141) → helps catch errors (undeclared variables, bad syntax, etc.) 

// ----- Functions (slide 46) that print values to the console -----

// Prints an Array of etudiants
const f1 = () => {
  //array (slide 38) const (slide 37)
  const etudiantsArray = ["Etudiant1", "Etudiant2", "Etudiant3"];  

  // loop (slide 44) 
  for (let etudiant of etudiantsArray) { 
    // display message to the console (slide 33)
    console.log(etudiant);
  }
};

// Prints an etudiant object
const f2 = () => {
  // object (slide 39)
  const etudiantObject = {
    nom: "John",
    prenom: "DOE",
    age: 30
  };

  console.log(etudiantObject);
};

// Prints an Array of etudiant objects
const f3 = () => {
  // Array of objects (slide 40)
  const etudiantObjectsArray = [
    {
      nom: "nom1",
      prenom: "prenom1",
      age: "21"
    },
    {
      nom: "nom2",
      prenom: "prenom2",
      age: "22"
    },
    {
      nom: "nom3",
      prenom: "prenom3",
      age: "23"
    }
  ]

  for (let etudiant of etudiantObjectsArray) { 
    console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
  }
};

// ----- Event listeners (slide 136) -----  
// Each button runs the corresponding function when clicked.

// Click button "Tableau Etudiants"
document.getElementById("tableau-etudiants").addEventListener("click", f1);

// Click button "Objet Etudiant"
document.getElementById("objet-etudiant").addEventListener("click", f2);

// Click button "Tableau d'objets Etudiants"
document.getElementById("tableau-d'objets-etudiants").addEventListener("click", f3);