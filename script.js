window.onscroll = function () { myFunction() };

const navbar = document.querySelector('header');
let navLink = document.querySelectorAll('.navLink')
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        navLink.forEach(element => {
            element.classList.add("changeColor")
        });

    } else {
        navbar.classList.remove("sticky");
        navLink.forEach(element => {
            element.classList.remove("changeColor")
        })
    }
}

    