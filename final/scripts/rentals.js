const url = 'https://ashesmsmith.github.io/wdd230/final/data/rentals.json';
const table = document.querySelector('#pricing-table');

async function getRentals () {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}



getRentals();