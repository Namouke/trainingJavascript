
// Section 1 Training days and hours

let hoursPerDays = 24;
let minutesPerHours = 60;
let secondsPerMinutes= 60;

let daysNumber = document.querySelector('#days-number');
let bunttonCLick = document.querySelector('#button-clik');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

bunttonCLick.addEventListener('click', () => {
    let days = daysNumber.value;
    let calculHours = days * hoursPerDays;
    let calculMinutes = calculHours * minutesPerHours;
    let calculSeconds = calculMinutes * secondsPerMinutes;
    
    hours.innerText = `${calculHours} hours`;
    minutes.innerText = `${calculMinutes} minutes`;
    seconds.innerText = `${calculSeconds} seconds`;
    
})
