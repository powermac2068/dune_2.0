const btnTop = document.querySelector('.nav__top');
const textDune = document.querySelector('.header__title');
const navigation = document.querySelector('.nav');
const windowWidth = window.innerWidth;
const logoName = document.querySelector('.logo__name');

window.onscroll = () => {
    const scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollToTop > 500) {
        btnTop.classList.add('nav__top--show');
    } else {
        btnTop.classList.remove('nav__top--show');
    };
};

btnTop.addEventListener('click', () => {
    textDune.classList.remove('header__title--animation');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        textDune.classList.add('header__title--animation');
    }, 100);
});

navigation.addEventListener('click', (evt) => {
    const link = evt.target.closest('.menu__link');
    if (!link) {
        return;
    }
    evt.preventDefault();
    const scrollToElement = link.getAttribute('href');
    document.querySelector(scrollToElement).scrollIntoView({
        behavior: 'smooth'
    });
});