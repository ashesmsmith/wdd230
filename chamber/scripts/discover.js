const currentDate = document.querySelector('.current-date');
const options2 = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'   
}

currentDate.innerHTML = new Date().toLocaleDateString('en-US', options2);