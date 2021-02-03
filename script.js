const hamburgerIcon = document.querySelector('.hamburger-menu');
const navbar= document.querySelector('.nav-bar')
hamburgerIcon.addEventListener('click' , () =>{
    navbar.classList.toggle("transform");
})