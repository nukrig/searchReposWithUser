const ul = document.getElementById('ul')
const submit = document.getElementById('submit')
const input = document.getElementById('input')
const h1 = document.getElementById('h1')

submit.addEventListener('click',(event)=>{
    event.preventDefault()
    ul.textContent=''
    const logIn = input.value
    fetch(`https://api.github.com/users/${logIn}/repos`)
    .then(response=>response.json())
    .then(value=>{
    let count = 1
    for(let element of value ){
        const h6 = document.createElement('h6')
        h6.textContent='REPOSITORY - ' + count
        count ++
        h6.style.fontWeight='bold'
        h6.style.color='yellow'
        ul.appendChild(h6)
        const li = document.createElement('li')
        li.textContent=element.name
        li.style.color='white'
        ul.appendChild(li)
    }
})
})
