

function cambiarColor(){
    variable_album = document.getElementById("album")
    variable_album.style.backgroundColor = "black"
    document.getElementById("titulo").style.color = "white"
    console.log(variable_album)

}

function cambiarTamano(){
    var x = document.getElementsByClassName("imagen")
    x[0].style.height =  "300px"
    x[0].style.width = "auto"

}