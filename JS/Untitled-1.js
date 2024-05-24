let raca = document.getElementById('raca')
let divRaca = document.getElementById('divRaca')

let classe = document.getElementById('classe')
let divClasse = document.getElementById ('divClasse')


let itens = document.getElementById('itens')

let habilidades = document.getElementById('habilidades')


raca.addEventListener('click', ()=> {
    divRaca.classList.add('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
})

classe.addEventListener('click', ()=> {
    divClasse.classList.add('divClasseTrue')
    divRaca.classList.remove('divRacaTrue')
})
