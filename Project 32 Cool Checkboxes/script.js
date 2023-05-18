const toggles = document.querySelectorAll('toggle')
const good = document.querySelectorAll('#good')
const cheap = document.querySelectorAll('#cheap')
const fast = document.querySelectorAll('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickeOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickeOne) {
            fast.checked = false
        }

        if(cheap === theClickeOne) {
            good.checked = false
        }

        if(fast === theClickeOne) {
            good.checked = false
        }

         




    }
}