const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); //Testing
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        var card = document.createElement('section');
        var fullName = document.createElement('h2');
        var birthdate = document.createElement('p');
        var birthPlace = document.createElement('p');
        var portrait = document.createElement('img');

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '201');
        portrait.setAttribute('height', '249');

        birthdate.innerHTML = `Date of Birth: ${prophet.birthdate}`;

        birthPlace.innerHTML = `Place of Birth ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}

getProphetData();