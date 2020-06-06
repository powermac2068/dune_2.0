var textDune = document.querySelector(".title");
var btnTop = document.querySelector(".upUpUp");
var appended = false;

onscroll = function () {
    var scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
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

function textDuneAnime() {
    textDune.classList.remove('titleAnime');
    setTimeout(function () {
        textDune.classList.add('titleAnime');
    }, 200);
};

btnTop.addEventListener('click', textDuneAnime);