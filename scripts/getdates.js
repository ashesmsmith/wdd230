
const copyrightYear = document.querySelector('#copyrightYear');
const options = {
    year: 'numeric'
}

copyrightYear.innerHTML = new Date().toLocaleDateString('en-US', options);

const lastModified = document.lastModified;
document.getElementById('lastModified').innerHTML = lastModified;