"use strict";

/* declaration des étudiants comme tableau d'objets - slide 40 */
const students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note1: 14, note2: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note1: 7, note2: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note1: 13, note2: 3 }
];

/* arrow funtion - slide 46 */
const B = (note1 , note2)=>{
  /*les operateurs - slide 41 */
  let  moy = (note1 + note2) / 2 + 5 ;
  /* conditions - slide 42 */
    if (moy >= 10){
      return true;
    }else {
      return false;
    }
};


function A (){
  /* boucle for-each  - slide 44 */
  students.forEach(student => {
    const estAdmis = B(student.note1 , student.note2);
    let delibStatut;

    /* condition - slide 42 */
    if(estAdmis){
      delibStatut = "ADMIS";
    }else{
      delibStatut = "AJOURNE";
    }
     
    /* template literals  - slide 46 */
    const delibMsg = `${student.id}: ${delibStatut}`
    console.log(delibMsg)
  });
};