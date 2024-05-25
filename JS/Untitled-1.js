let raca = document.getElementById('raca')
let divRaca = document.getElementById('divRaca')

let classe = document.getElementById('classe')
let divClasse = document.getElementById ('divClasse')


let itens = document.getElementById('itens')
let divItens = document.getElementById('divItens')

let habilidades = document.getElementById('habilidades')

let Olcultismo = document.getElementById('Olcultismo')
let divOcultista = document.getElementById('divOcultista')


raca.addEventListener('click', ()=> {
    divRaca.classList.add('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
    divItens.classList.remove('divItensTrue')
})

classe.addEventListener('click', ()=> {
    divClasse.classList.add('divClasseTrue')
    divRaca.classList.remove('divRacaTrue')
    divItens.classList.remove('divItensTrue')
})

itens.addEventListener('click', ()=> {
    divItens.classList.add('divItensTrue')
    divRaca.classList.remove('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
})

Olcultismo.addEventListener('click', ()=>{
    divOcultista.classList.add('divOlcultistaTrue')
    divRaca.classList.remove('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
    divItens.classList.remove('divItensTrue')
})
