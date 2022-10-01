

let heuresParJour = 24;
let minutesParHeure = 60;
let secondesParMinute = 60;

let nombreJours = document.querySelector('#nombre-jours');
let boutonClick = document.querySelector('#bouton-click');
let heures = document.querySelector('#heures');
let minutes = document.querySelector('#minutes');
let secondes = document.querySelector('#secondes');

boutonClick.addEventListener('click', () => {
    let jour = nombreJours.value;
    let calculeHeures = jour * heuresParJour;
    let calculeMinutes = calculeHeures * minutesParHeure;
    let calculeSecondes = calculeMinutes * secondesParMinute;

    heures.innerText = `${calculeHeures} heures soit`
    minutes.innerText = `${calculeMinutes} minutes soit`
    secondes.innerText = `${calculeSecondes} secondes.`
    
})
