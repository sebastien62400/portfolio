const titleAbout = document.querySelectorAll('.content-about h1');
const contentAbout = document.querySelectorAll('.content-about li');
const backButton = document.querySelectorAll('.back-button a');

window.addEventListener('load', () => {
    const TL = gsap.timeline( {paused:true} );

    TL
    .staggerFrom(titleAbout, 1, { y: -100, opacity: 0 }, .25)
    .staggerFrom(contentAbout, 1, { x: -100, opacity: 0 }, .25)
    .staggerFrom(backButton, .25, { y: 100, opacity: 0 }, .25);

    TL.play();
});