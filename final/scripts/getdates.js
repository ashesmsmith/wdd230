const copyrightYear = document.querySelector('#copyrightYear');
const options = {
    year : 'numeric'
}

copyrightYear.innerHTML = new Date().toLocaleDateString('en-US', options);