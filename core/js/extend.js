// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
const navbar = document.getElementsByClassName("nav-transparent");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        for(let i = 0; i<navbar.length; i++){
            navbar[i].classList.add('scroll');
         console.log('dsada')
        }
    } else {
        for(let i = 0; i<navbar.length; i++){
            navbar[i].classList.remove('scroll');
            console.log('fggfd')
        }
    }
}