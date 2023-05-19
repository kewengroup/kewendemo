let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.addEventListener("click", () => { 
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
});

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.intro-text',{delay: 200, origin: top});
sr.reveal('.intro-img',{delay: 450, origin: top});