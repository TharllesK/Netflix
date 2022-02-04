function toggleVideo() {
    var trailer = document.querySelector('.trailer');
    const video = documente.querySelector('.video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause ();
}