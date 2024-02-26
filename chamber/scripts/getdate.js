// Last Modified - Footer
const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = lastModified;

// Copyright Year - Footer
const copyrightYear = document.querySelector('#copyrightYear');
const options = {
    year: 'numeric'
}
copyrightYear.innerHTML = new Date().toLocaleDateString('en-US', options);