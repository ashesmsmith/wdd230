const baseURL = 'https://ashesmsmith.github.io/wdd230/';
const linksURL = 'https://ashesmsmith.github.io/wdd230/data/links.json';
const list = document.querySelector('#weeks');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data); //Testing

    displayLinks(data.lessons); // lessons array from json file
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => { //look at each individual week/lesson from array
        var weekNum = document.createElement('li');
        weekNum.innerHTML = `${week.lesson}: `; 
        
        week.links.forEach((link) => { //look at each link from array of links on each week
            var linkURL = document.createElement('a');
            linkURL.setAttribute('href', link.url);
            linkURL.setAttribute('target', '_blank');
            linkURL.innerHTML = `${link.title}`;

            weekNum.appendChild(linkURL);
        })
        
        list.appendChild(weekNum);
    })
}

getLinks();