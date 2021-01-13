function handleClickC8() {
    var soundPlayer = document.getElementById("gq");
    soundPlayer.play();
}


function init() {
    console.log("Initializing...");
    var c8 = document.getElementById("c8");
    c8.addEventListener("click", handleClickC8);
}

document.addEventListener('DOMContentLoaded', init);