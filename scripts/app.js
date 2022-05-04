let cursor = document.querySelector('.edit-cursor');
let button = document.getElementById('a');

window.addEventListener('mousemove',mouse_cursor);

function mouse_cursor(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}