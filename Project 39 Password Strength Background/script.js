const password = document.getElementById('password')
const bckground = document.getElementById('background')

password.addEventListener('input', (e) => {
    const input = e.target.value
    console.log(input)
})