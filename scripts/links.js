const baseURL = 'https://ashesmsmith.github.io/wdd230/';
var linksURL = 'https://ashesmsmith.github.io/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.lessons); //Testing
}