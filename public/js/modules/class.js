export class Patient {
    constructor(nom, maladie, argent) {
        this.nom = nom,
            this.maladie = maladie,
            this.argent = argent,
            this.poche = [],
            this.etatSante = "malade"
        this.lieu = "hopitale"
    }
    goTo = (lieu) => {
        console.log(`${this.nom} se déplace vers la ${lieu}`);
        return this.lieu = lieu
    }
    takeCare = () => {

    }
    payer = () => {

    }

}

export class Doctor {
    constructor(nom, argent) {
        this.nom = nom,
            this.argent = argent,
            this.cabinet = []
    }
    diagnostique = (patient) => {
        switch (patient.maladie) {
            case "mal indenté":
                console.log(`Le patient ${patient.nom} a été diagnostiqué ctrl+maj+f`);
                return patient.maladie = "ctrl+maj+f"
            case "unsave":
                console.log(`Le patient ${patient.nom} a été diagnostiqué saveOnFocusChange`);
                return patient.maladie = "saveOnFocusChange"
            case "404":
                console.log(`Le patient ${patient.nom} a été diagnostiqué CheckLinkRelation`);
                return patient.maladie = "CheckLinkRelation"
            case "azmatique":
                console.log(`Le patient ${patient.nom} a été diagnostiqué Ventoline`);
                return patient.maladie = "Ventoline"
            case "syntaxError":
                console.log(`Le patient ${patient.nom} a été diagnostiqué f12+doc`);
                return patient.maladie = "f12+doc"
        }
    }
    patientIn = (patient) => {
        this.cabinet.push(patient[0]);
        console.log(`Le patient ${patient[0].nom} est rentrer dans le cabinet du docteur ${this.nom}`);
        patient.splice(0, 1)
    }
    patientOut = () => {

    }
}