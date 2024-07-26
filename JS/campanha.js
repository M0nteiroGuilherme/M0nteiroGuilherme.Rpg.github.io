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

//--------------localStorage--------------//
document.getElementById("imgPerfil").src = localStorage.getItem("editPerfil")