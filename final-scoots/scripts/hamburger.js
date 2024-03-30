const hamButton = document.querySelector('#ham-btn');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navigation.classList.toggle('show');
})