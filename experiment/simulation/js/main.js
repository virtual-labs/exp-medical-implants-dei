//Your JavaScript goes in here
function showSimulation(id) {
    const overlay = document.getElementById(id);
    overlay.style.display = "flex";

    const video = overlay.querySelector("video");
    if (video) {
        video.currentTime = 0;
        video.play();
    }
}

function hideSimulation(id) {
    const overlay = document.getElementById(id);
    overlay.style.display = "none";

    const video = overlay.querySelector("video");
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

