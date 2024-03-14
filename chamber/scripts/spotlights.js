const urlSpotlight = 'https://ashesmsmith.github.io/wdd230/chamber/data/members.json';
const spotlightSection = document.querySelector('.spotlights');
const spotLights = [];

async function getSpotlightInfo () {
    const response = await fetch(urlSpotlight);
    const data = await response.json();

    displaySpotlights(data);
}

function displaySpotlights (data) {
    // add gold and silver level members to array
    data.members.forEach((member) => {
        if(member.mmbrlevel == 'Gold' || member.mmbrlevel == 'Silver') {
            spotLights.push(member);
        }
    })

    // choose 2 different random numbers/indexes
    let randomOne = Math.floor((Math.random() * (spotLights.length)));
    
    do {
        randomTwo = Math.floor((Math.random() * (spotLights.length)));
    }
    while(randomTwo === randomOne);

    // display random members
    let spotOne = document.createElement('section');
    let spotImageOne = document.createElement('img');
    spotImageOne.setAttribute('src', data.members[randomOne].image);
    spotImageOne.setAttribute('alt', `${data.members[randomOne].company} logo`);
    spotImageOne.setAttribute('width', '150');
    spotImageOne.setAttribute('height', '50');
    let spotNameOne = document.createElement('h3');
    spotNameOne.innerHTML = data.members[randomOne].company;
    let spotDescOne = document.createElement('p');
    spotDescOne.innerHTML = data.members[randomOne].details;
    let spotPhoneOne = document.createElement('p');
    spotPhoneOne.innerHTML = data.members[randomOne].phone;
    let spotURLOne = document.createElement('a');
    spotURLOne.setAttribute('href', data.members[randomOne].url);
    spotURLOne.innerHTML = data.members[randomOne].url;

    spotOne.appendChild(spotImageOne);
    spotOne.appendChild(spotNameOne);
    spotOne.appendChild(spotDescOne);
    spotOne.appendChild(spotPhoneOne);
    spotOne.appendChild(spotURLOne);

    spotlightSection.appendChild(spotOne);

    let spotImageTwo = document.createElement('img');
    spotImageTwo.setAttribute('src', data.members[randomTwo].image);
    spotImageTwo.setAttribute('alt', `${data.members[randomTwo].company} logo`);
    spotImageTwo.setAttribute('width', '150');
    spotImageTwo.setAttribute('height', '50');
    let spotTwo = document.createElement('section');
    let spotNameTwo = document.createElement('h3');
    let spotDescTwo = document.createElement('p');
    spotDescTwo.innerHTML = data.members[randomTwo].details;
    spotNameTwo.innerHTML = data.members[randomTwo].company;
    let spotPhoneTwo = document.createElement('p');
    spotPhoneTwo.innerHTML = data.members[randomTwo].phone;
    let spotURLTwo = document.createElement('a');
    spotURLTwo.setAttribute('href', data.members[randomTwo].url);
    spotURLTwo.innerHTML = data.members[randomTwo].url;

    spotTwo.appendChild(spotImageTwo);
    spotTwo.appendChild(spotNameTwo);
    spotTwo.appendChild(spotDescTwo);
    spotTwo.appendChild(spotPhoneTwo);
    spotTwo.appendChild(spotURLTwo);
    
    spotlightSection.appendChild(spotTwo);
}

getSpotlightInfo();