const ratings = document.querySelectorAll('.ratings')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

panel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
    }
})

function removeActive() {
    for(let i = 0; i< ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}