const gridBtn = document.querySelector('#grid-btn');
const listBtn = document.querySelector('#list-btn');
const displayArea = document.querySelector('#directory-sections');
const listItem = document.querySelector('.list');

gridBtn.addEventListener('click', () => {
    displayArea.classList.add('grid');
    displayArea.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    displayArea.classList.add('list');
    displayArea.classList.remove('grid');
});