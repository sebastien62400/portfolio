const title = document.querySelectorAll('.content h1');
const content = document.querySelectorAll('.content li');
const backButton = document.querySelectorAll('.back-button a');

window.addEventListener('load', () => {
    const TL = gsap.timeline( {paused:true} );

    TL
    .staggerFrom(title, 1, { y: -100, opacity: 0 }, .25)
    .staggerFrom(content, 1, { x: -100, opacity: 0 }, .25)
    .staggerFrom(backButton, .25, { y: 100, opacity: 0 }, .25);

    TL.play();
});