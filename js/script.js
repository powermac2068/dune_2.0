const btnTop = document.querySelector('.upUpUp');
const textDune = document.querySelector('.title');
const navigation = document.querySelector('.allNav');

window.onscroll = () => {
    const scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollToTop > 500) {
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
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
});