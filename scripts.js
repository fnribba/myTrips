let menuToggle = document.querySelector('.toggle');

let navbar__ul = document.querySelector('.navbar__ul');

menuToggle.onclick = function(){
        menuToggle.classList.toggle('active')
        navbar__ul.classList.toggle('active')
    }