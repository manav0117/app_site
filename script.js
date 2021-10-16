// For the navbar
let menu=document.getElementById('menu');
let nav=document.querySelector('.navbar');
menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    nav.classList.toggle('nav-toggle');
});
window.onscroll=()=>{
menu.classList.remove('fa-times');
nav.classList.remove('nav-toggle');
}; 