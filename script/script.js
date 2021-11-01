let home = document.querySelector('.item1')
let about = document.querySelector('.item2')
let projects = document.querySelector('.item3')
let contact = document.querySelector('.item4')
let nav = document.querySelector('.nav2')
let hamburgerBtn = document.querySelector('.gamburgerIcon')
let linkBtn = document.querySelectorAll('.gamburgerItem')
let menuActive = document.querySelector('.gamburger')
let a = globalThis.screen.availHeight
let checker = true
hamburgerBtn.addEventListener('click',()=>{
    menuActive.classList.toggle('activeMenu')
    if(checker){
     hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'
     checker = false
    }else if(!checker){
     hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'
     checker = true
    }
})
linkBtn[0].addEventListener('click',()=>{
    menuActive.classList.toggle('activeMenu')
    if(checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'
        checker = false
       }else if(!checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'
        checker = true
       }
})
linkBtn[1].addEventListener('click',()=>{
    menuActive.classList.toggle('activeMenu')
    if(checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'
        checker = false
       }else if(!checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'
        checker = true
       }
})
linkBtn[2].addEventListener('click',()=>{
    menuActive.classList.toggle('activeMenu')
    if(checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'
        checker = false
       }else if(!checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'
        checker = true
       }
})
linkBtn[3].addEventListener('click',()=>{
    menuActive.classList.toggle('activeMenu')
    if(checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'
        checker = false
       }else if(!checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'
        checker = true
       }
})
linkBtn[4].addEventListener('click',()=>{
    menuActive.classList.toggle('activeMenu')
    if(checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>'
        checker = false
       }else if(!checker){
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>'
        checker = true
       }
})
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    if(scroll<(a-100)){
        home.classList.add('active');
        about.classList.remove('active');
    }if(scroll>(a-100)){
        home.classList.remove('active');
        about.classList.add('active');
        projects.classList.remove('active');
    }if(scroll>((a*2)-50) ){
        about.classList.remove('active');
        projects.classList.add('active');
        contact.classList.remove('active');
    }if(scroll>((a*3)-50) ){
        contact.classList.add('active');
        projects.classList.remove('active');
    }
});
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0px";
    } else {
        nav.style.top = "-50px";
     }
    prevScrollpos = currentScrollPos;
    if(prevScrollpos>=700){
        nav.style.backgroundColor = "#fcc92f";
    }
    if(prevScrollpos<=50){
        nav.style.backgroundColor = "transparent";
    }
}
menuActive.click()