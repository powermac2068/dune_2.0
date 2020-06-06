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
    textDune.animate(
        [{
                transform: 'translateX(0)'
            },
            {
                transform: 'translateX(-100%)'
            },
            {
                transform: 'translateX(0)'
            }
        ], {
            duration: 1500,
            delay: 500,
            easing: 'cubic-bezier(0.1, 0.8, 0.6, 1)'
        }
    );
};

btnTop.addEventListener('click', textDuneAnime);