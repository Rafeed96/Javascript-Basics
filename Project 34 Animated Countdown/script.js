const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function runAnimation() {
    nums.forEach((num, idx) => {
        console.log(num,idx)
    })
}
