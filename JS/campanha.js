document.getElementById("butao").addEventListener("click", function() {
    var gameCard = document.getElementById("gamecard");
    var button = document.getElementById("butao");


    if (gameCard.style.display === "none") {
        gameCard.style.display = "block";
        button.style.display = "none";
    } else {
        gameCard.style.display = "none";
        button.style.display = "block";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const SobreCampanha = document.getElementById('SobreCampanha')
    const textSobreCampanha = localStorage.getItem('textSobreCampanha')
    if (textSobreCampanha) {
        SobreCampanha.value = textSobreCampanha
    }
    SobreCampanha.addEventListener("input", function() {
        localStorage.setItem("textSobreCampanha", SobreCampanha.value)
    })

    const titleCampanha = document.getElementById('titleCampanha')
    const savedTitle = localStorage.getItem('savedTitle')
    if (savedTitle) {
        titleCampanha.value = savedTitle
    }
    titleCampanha.addEventListener("input", function() {
        localStorage.setItem("savedTitle", titleCampanha.value)
    })
})


//--------------localStorage--------------//
document.getElementById("imgPerfil").src = localStorage.getItem("editPerfil")