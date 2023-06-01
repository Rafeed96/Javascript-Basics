const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results} = await res.json()
    
    
    results.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"
        `
    })
}
