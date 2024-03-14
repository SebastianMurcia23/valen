function textImg(card) {
    var text = card.querySelector('.text');
    var img = card.querySelector('.img1');
    var button = card.querySelector('.Button');

    if (text.style.display === "none") {
        text.style.display = "block";
        img.style.display = "none";
    } else {
        text.style.display = "none";
        img.style.display = "block";
    }

    if (button.style.display === "none") {
        button.style.display = "block";
    }else {
       button.style.display = "none" 
    }
    
}



document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");

    // Verifica si hay una posición de reproducción almacenada en localStorage
    const storedTime = localStorage.getItem("audioTime");
    if (storedTime) {
        audio.currentTime = parseFloat(storedTime);
    }

    // Almacena la posición de reproducción cada vez que cambie
    audio.addEventListener("timeupdate", function() {
        localStorage.setItem("audioTime", audio.currentTime);
    });
});

function abrirEnlace() {
    // Almacena la posición de reproducción actual
    const audio = document.getElementById("myAudio");
    localStorage.setItem("audioTime", audio.currentTime);
    
    // Ruta al archivo HTML que deseas abrir
    var rutaArchivo = "index2.html";
    // Cambia la ubicación actual
    window.location.href = rutaArchivo;
}
