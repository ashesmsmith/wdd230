const banner = document.querySelector('.banner');
const bannerBtn = document.querySelector('.banner-btn');
const today = new Date();
const weekday = today.getDay();

if (weekday == 1 || weekday == 2 || weekday ==3) {
    bannerBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });
}

else {
    banner.style.display = 'none';
}