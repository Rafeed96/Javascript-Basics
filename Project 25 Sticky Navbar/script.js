const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY, nav.offestHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
