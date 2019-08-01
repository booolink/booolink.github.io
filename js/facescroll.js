var totop = document.querySelector('.totop')


window.addEventListener('scroll', scroll1)


function scroll1() {
    if (document.documentElement.scrollTop >= 700) {
        totop.classList.remove('movie_none')
    } else {
        totop.classList.add('movie_none')
    }
}

