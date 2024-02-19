// Last Modified - Footer
const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = lastModified;

// Copyright Year - Footer
const copyrightYear = document.querySelector('#copyrightYear');
const options = {
    year: 'numeric'
}
copyrightYear.innerHTML = new Date().toLocaleDateString('en-US', options);

// Current Date - Discover Page
const currentDate = document.querySelector('.current-date');
const options2 = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'   
}

currentDate.innerHTML = new Date().toLocaleDateString('en-US', options2);