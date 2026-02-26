// Your JavaScript goes in here
function showSimulation(id) {
    const overlay = document.getElementById(id);

    if (overlay) {
        overlay.style.display = "flex";

        const video = overlay.querySelector("video");
        if (video) {
            video.pause();        // prevent autoplay
            video.currentTime = 0; // reset video
        }
    }
}
function hideSimulation(id) {
    const overlay = document.getElementById(id);

    if (overlay) {
        overlay.style.display = "none";

        const video = overlay.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
}
