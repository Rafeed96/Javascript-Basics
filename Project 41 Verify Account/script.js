const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((cide, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx + 1].focus()
        }
    })
})