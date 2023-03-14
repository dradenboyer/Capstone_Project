let magicBall = document.querySelector('img')
let textres = document.querySelector('#text')
let submitBtn = document.getElementById('submit')
let ballRes = document.getElementById('ballRes')
let resContainer = document.getElementById('resContainer')

const createWords = (str) => {
    textres.innerHTML = ''
    let words = document.createElement('p')
    words.textContent = str
    textres.appendChild(words)
}


magicBall.addEventListener('mouseout', (evt) => {
    evt.preventDefault()
    axios.get('/api/response/')
    .then(res => {
        createWords(res.data)
    })
    .catch(err => console.log(err))
})


const addResponse = evt => {
    console.log('button pushed')
    evt.preventDefault()
    let body = {
        string: ballRes.value
    }
    axios.post('/api/response/', body)
    .then(res => {
        let newDiv = document.createElement('div')
        let newRes = document.createElement('p')
        let resBtn = document.createElement('button')
        resBtn.setAttribute('response', res.data)
        newDiv.setAttribute('id', res.data)

        resBtn.textContent = 'x'
        newRes.textContent = res.data
        resBtn.addEventListener('click', deleteResponse)
        
        
        newDiv.appendChild(resBtn)
        newDiv.appendChild(newRes)
        resContainer.appendChild(newDiv)
        console.log(res.data)
    })
    .catch(err => console.log(err))
}


const deleteResponse = evt => {
    console.log(evt.target.getAttribute('response'))
    axios.delete(`/api/response?res=${evt.target.getAttribute('response')}`)
   
     let deleter = document.getElementById(evt.target.getAttribute('response'))
     deleter.remove()

}

submitBtn.addEventListener('click', addResponse)