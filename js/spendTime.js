
const moisParAn = 12;
const joursParMois = 30;
const jourParHeures = 24;
const secondesParHeures = 3600;

const heuresInput = document.querySelector('#heures-input');
const boutonVrais = document.querySelector('#bouton-vrais');
const annees = document.querySelector('#annees');
const mois = document.querySelector('#mois');
const jours = document.querySelector('#jours');
const secondes = document.querySelector('#secondes');

boutonVrais.addEventListener('click', () => {
    let heures = heuresInput.value;
    let calculeAn = heures / (moisParAn * joursParMois * jourParHeures);
    let calculeMois = heures / (joursParMois * jourParHeures);
    let calculeJours = heures / jourParHeures;
    let calculeSecondes = heures * secondesParHeures;

    annees.innerText = `${calculeAn} années soit`;
    mois.innerText = `${calculeMois} mois soit`;
    jours.innerText = `${calculeJours} jours soit`;
    secondes.innerText = `${calculeSecondes} secondes`;
});