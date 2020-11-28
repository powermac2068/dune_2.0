const btnTop = document.querySelector('.upUpUp');
const textDune = document.querySelector('.title');
const navigation = document.querySelector('.allNav');
let appended = false;

onscroll = function () {
    const scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollToTop > 500) {
        if (!appended) {
            btnTop.classList.add('show');
            appended = true;
        };
    } else {
        if (appended) {
            btnTop.classList.remove('show');
            appended = false;
        };
    };
};

btnTop.addEventListener('click', () => {
    textDune.classList.remove('titleAnime');
    window.scrollTo(0, 0);
    setTimeout(() => {
        textDune.classList.add('titleAnime');
    }, 100);
});


navigation.addEventListener('click', (evt) => {
    const link = evt.target.closest('.menuListLink');
    if (!link) {
        return;
    }
    evt.preventDefault();
    const scrollToElement = link.getAttribute('href');
    document.querySelector(scrollToElement).scrollIntoView({
        behavior: 'smooth'
    });
    location.href = scrollToElement;
});