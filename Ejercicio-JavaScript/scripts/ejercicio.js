

function cambiarColor(){
    variable_album = document.getElementById("album")
    variable_album.style.backgroundColor = "black"
    document.getElementById("titulo").style.color = "white"
    console.log(variable_album)

}

function cambiarTamano(){
    var tamano = document.getElementsByClassName("imagen")
    tamano[0].style.height =  "300px"
    tamano[0].style.width = "auto"

}