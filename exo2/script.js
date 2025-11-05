"use strict";

/*declaration d'un tableau - slide 38*/
const tableauEtudiants = ["Etudiant1" , "Etudiant2" , "Etudiant3"];

function F1 () {
  /* boucle for - slide 44 */
  for (let i = 0 ; i < tableauEtudiants.length ; i++){
    console.log(tableauEtudiants[i]);
  };
};


/* declaration d'un objet - slide 39 */
const etudiant = {
  nom: 'John',
  prenom : 'DOE',
  age : 30
};

function F2 (){
  console.log(etudiant);
};


/* declaration D'un tableau d'objets etudiants */
const tableauObjetsEtudiants = [
{ nom: "nom1", prenom: "prenom1", age: 21 },
{ nom: "nom2", prenom: "prenom2", age: 22 },
{ nom: "nom3", prenom: "prenom3", age: 23 }
];

function F3 (){
  // boucle forEach - slide 44
    tableauObjetsEtudiants.forEach(function(etudiant) {
      /* template literals  - slide 46 */
        const ligne = `${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`;
        console.log(ligne);
    });
}