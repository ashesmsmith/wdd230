const darkBox = document.querySelector('.slider');
const main = document.querySelector('main');
const ctah2 = document.querySelector('.cta h2');
const events = document.querySelector('.events');
const weather = document.querySelector('.weather');
const spotlights = document.querySelector('.spotlights')

darkBox.addEventListener('click', () => {
    // Turn Dark Mode OFF
    if (darkBox.textContent.includes('☀')) {
        main.style.background = '#fff';
        main.style.color = '#000';
        events.style.background = '#ECF1FD';
        weather.style.background = '#6A93F0';
        darkBox.textContent = '';

        if (window.matchMedia('(min-width: 800px)').matches) {
            spotlights.style.background = '#fff';
        }

        else {
            spotlights.style.background = '#ECF1FD';
        }
    }  
    
    // Turn Dark Mode ON
    else {
        main.style.background = '#000';
        main.style.color = '#fff';
        ctah2.style.color = '#000';
        events.style.background = '#343A40';
        weather.style.background = '#343A40';
        darkBox.textContent = '☀';

        if (window.matchMedia('(min-width: 800px)').matches) {
            spotlights.style.background = '#000';
        }

        else {
            spotlights.style.background = '#343A40';
        }
    }
});