const navbar = document.querySelector(".navbar");
const lio = document.querySelector('#lio')
const menu = document.querySelector('.menu')
let menuButton = document.querySelector('.menu-btn')
const home = document.querySelector('.home-content')
const title = document.querySelector('.nav-title')
const phoneMenu = document.querySelector('.phone-menu')


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


// button.addEventListener('click' , (toggleTasks) => {
//     let clickCount = 0;
//     button ++;
//     if (clickCount % 2 === 1) {
       
//         menu.style.display = 'flex'
//     } else {
//         // Even click
//         menu.style.display = 'none'
//     }
   
// })
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