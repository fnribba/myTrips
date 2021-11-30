let menuToggle = document.querySelector('.toggle');

let navbar__ul = document.querySelector('.navbar__ul');

menuToggle.onclick = function(){
        menuToggle.classList.toggle('active')
        navbar__ul.classList.toggle('active')
    }

function scrollHeader(){
        const header = document.getElementById('header')
        // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
