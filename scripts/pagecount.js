const pageVists = document.querySelector('#visits');

//GET the value for numVisits-ls key in localStorage 
//If no numVisits key, assign 0 to the numVisits variable
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

//determine number of visits and display
if (numVisits !== 0) {
    pageVists.innerHTML = numVisits;
}

else {
    pageVists.textContent = 'Welcome!';
}

//increment by 1
numVisits++;

//new visits total saved in localStorage
localStorage.setItem('numVisits-ls', numVisits);