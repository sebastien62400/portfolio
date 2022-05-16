let cursor = document.querySelector('.edit-cursor');
let button = document.getElementById('a');

console.log(`Welcome! You can check the public code like the HTML and CSS 😉. The page have been created in JavaScript vanilla.`);

window.addEventListener('mousemove',mouse_cursor);

function mouse_cursor(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}

// Dropdown menu anim

const dropDownBtn = document.getElementById('button-drop-down');
const dropDownMenu = document.querySelector('.drop-down-content');


dropDownBtn.addEventListener('mouseover', () => {
    
    const TL = gsap.timeline({paused: true});
    TL
    .staggerFrom(dropDownMenu, .5,{opacity: 0}, 0.2);
    
    TL.play();
});

// Error project

const errorProject = document.querySelector('.error-project-background');
const closeError = document.querySelector('.close-error');
const project = document.getElementById('project');

project.addEventListener('click', () => {
    errorProject.style.display = "block";
});

closeError.addEventListener('click', () => {
    errorProject.style.display = "none";
})