const msToDays = 86400000; // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const messageDisplay = document.querySelector('#message');

//Today
const msDateToday = Date.now(); //timestamp
let dateToday = new Date(msDateToday); //timestamp as date
let formatDateToday = `${dateToday.getDate()}/${dateToday.getMonth() + 1}/${dateToday.getFullYear()}`;

//Last Visit
let msLastVisit = getDate() || 0; //return last timestamp or 0
let lastVisit = new Date(msLastVisit); //timestamp as date
let formatLastVisit = `${lastVisit.getDate()}/${lastVisit.getMonth() + 1}/${lastVisit.getFullYear()}`;

//Processing
if (msLastVisit === 0) {
    messageDisplay.textContent = 'Welcome! Let us know if you have any questions.';
    setDate();
}

else if (formatLastVisit === formatDateToday) {
    messageDisplay.textContent = 'Back so soon! Awesome!';
    setDate();
}

else {
    let daysDifference = (msDateToday - msLastVisit) / msToDays;

    if (daysDifference.toFixed(0) <= 1) {
        messageDisplay.textContent = `You last visited 1 day ago.`;
        setDate();
    }

    else {
        messageDisplay.textContent = `You last visited ${daysDifference.toFixed(0)} days ago.`;
        setDate();
    }
}

function setDate() {
    localStorage.setItem('currentDate-ls', JSON.stringify(msDateToday));
}

function getDate() {
    return JSON.parse(localStorage.getItem('currentDate-ls'));
}