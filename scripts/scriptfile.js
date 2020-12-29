const scrollicon = document.querySelector('#scrollicon');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 120 ) {
        scrollicon.style.display = 'flex';
    }
    else {
        scrollicon.style.display = 'none';
    }
})

scrollicon.addEventListener('click', () => {
    window.scrollTo(0, 0);
})