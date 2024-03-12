function textImg(card) {
    var text = card.querySelector('.text');
    var img = card.querySelector('.img1');

    if (text.style.display === "none") {
        text.style.display = "block";
        img.style.display = "none";
    } else {
        text.style.display = "none";
        img.style.display = "block";
    }
    
}
