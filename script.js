const hamburgerIcon = document.querySelector('.ham-burger_btn');
const hamburger= document.querySelector('.ham-burger')
hamburgerIcon.addEventListener('click' , () =>{
    hamburger.classList.toggle("transform");
})