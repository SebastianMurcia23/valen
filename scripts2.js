function textImg(card) {
    var text = card.querySelector('.text');
    var img = card.querySelector('.img1');
    var button = card.querySelector('.Button');
    var gift = card.querySelector('.gift');

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

function abrirEnlace() {
    // Ruta al archivo HTML que deseas abrir
    var rutaArchivo = "index.html";
    // Cambia la ubicación actual
    window.location.href = rutaArchivo;
}
