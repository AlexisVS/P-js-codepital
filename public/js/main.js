import { salleAttente, pharmacie } from "./modules/variables.js";
import { Doctor, Patient } from "./modules/class.js";
import { } from "./modules/functions.js";


/* ------------------------- initialisation de l'exo ------------------------ */
// patient
let marcus = new Patient("Marcus", "mal indenté", 100);
let optimus = new Patient("Optimus", "unsave", 200);
let sangoku = new Patient("Sangoku", "404", 80);
let darthVader = new Patient("DarthVader", "azmatique", 110);
let semicolon = new Patient("Semicolon", "syntaxError", 60);
salleAttente.push(marcus, optimus, sangoku, darthVader, semicolon)

// Docteur
let docteur = new Doctor("Gregory House", 1000)

while (salleAttente.length != 0) {
    // Le patient rentre chez le docteur
    docteur.patientIn(salleAttente);
    // le docteur les diagnostique et prend l'argent
    docteur.diagnostique(docteur.cabinet[0])
    docteur.cabinet[0].argent -= 50;
    docteur.argent += 50;
    // le patient va à la pharmacie
    docteur.cabinet[0].goTo("pharmacie")
    pharmacie.personnes.push(docteur.cabinet[0])
    docteur.cabinet = [];
    
    console.log(pharmacie.traitements[pharmacie.personnes[0].maladie]);
}

//si mon patient a la maladie ctrl+maj+f et que 
//la pharmacie contient un traitement de ce meme nom alors ...
console.log(pharmacie.personnes[0].maladie);
console.log(Object.values());