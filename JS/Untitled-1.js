let raca = document.getElementById('raca')
let divRaca = document.getElementById('divRaca')

let classe = document.getElementById('classe')
let divClasse = document.getElementById ('divClasse')


let itens = document.getElementById('itens')
let divItens = document.getElementById('divItens')

let habilidades = document.getElementById('habilidades')

let Ocultismo = document.getElementById('Ocultismo')
let divOcultista = document.getElementById('divOcultista')


raca.addEventListener('click', ()=> {
    divRaca.classList.add('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
    divItens.classList.remove('divItensTrue')
    divOcultista.classList.remove('divOcultistaTrue')
})

classe.addEventListener('click', ()=> {
    divClasse.classList.add('divClasseTrue')
    divRaca.classList.remove('divRacaTrue')
    divItens.classList.remove('divItensTrue')
    divItens.classList.remove('divItensTrue')
    divOcultista.classList.remove('divOcultistaTrue')
})

itens.addEventListener('click', ()=> {
    divItens.classList.add('divItensTrue')
    divRaca.classList.remove('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
    divOcultista.classList.remove('divOcultistaTrue')
})

Ocultismo.addEventListener('click', ()=>{
    divOcultista.classList.add('divOcultistaTrue')
    divRaca.classList.remove('divRacaTrue')
    divClasse.classList.remove('divClasseTrue')
    divItens.classList.remove('divItensTrue')
})
