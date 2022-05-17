let cursor = document.querySelector('.edit-cursor');
let button = document.getElementById('a');

console.log(`Welcome!`);

window.addEventListener('mousemove',mouse_cursor);

function mouse_cursor(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}

// animation on page load

const navButtons = document.querySelectorAll('.item li');
const Dropdown = document.querySelector('.drop-down');

window.addEventListener('load', () =>{
    const TL = gsap.timeline( {paused:true} );

    TL
    .staggerFrom(navButtons, 1, { x: -100, opacity: 0 }, .25)
    .staggerFrom(Dropdown, 1, { x:-100, opacity: 0 }, .25);

    TL.play();
});

// Dropdown menu anim

const dropDownBtn = document.getElementById('button-drop-down');
const dropDownMenu = document.querySelector('.drop-down-content li');


dropDownBtn.addEventListener('mouseover', () => {
    
    const TL = gsap.timeline();
    TL
    .staggerFrom(dropDownMenu, .5,{x: -100, opacity: 0}, 0.2);
    
    TL.play();
});

// Error project

const errorProject = document.querySelector('.error-project-background');
const closeError = document.querySelector('.close-error');
const project = document.getElementById('project');

project.addEventListener('click', () => {
    errorProject.style.display = 'block';
});

closeError.addEventListener('click', () => {
    errorProject.style.display = 'none';
});