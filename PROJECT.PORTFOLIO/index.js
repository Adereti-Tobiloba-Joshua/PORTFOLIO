const navbar = document.querySelector(".navbar");
const lio = document.querySelector('#lio')
const menu = document.querySelector('.menu')
let menuButton = document.querySelector('.menu-btn')
const home = document.querySelector('.home-content')
const title = document.querySelector('.nav-title')
const phoneMenu = document.querySelector('.phone-menu')
const text = [ 'Frontend Website Developer', 'Graphic Designer']
let index = 0;

window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY;
    if (scrollPosition > 1) {
        navbar.style.backgroundColor = 'green'
        lio.style.color = 'white'
    }
    else{
        navbar.style.backgroundColor = 'black'
        lio.style.color = 'green'
    }
})

function changeText () {
    document.getElementById('change').textContent = text[index];
    index = (index + 1) % text.length;
}
setInterval(changeText, 2000);

let clickCount = 0;
function toggleTasks() {
    clickCount++;
    if (clickCount % 2 === 1) {
        phoneMenu.style.display = 'block'
        navbar.style.position = 'absolute'

    } else {
        // Even click
        phoneMenu.style.display = 'none'
    } 
}