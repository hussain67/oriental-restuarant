

    let menuIcon = document.querySelector('.nav__icon');
    let barIcon =  document.querySelector('.fa-bars');
    let menuContent = document.querySelector('.nav__items');
       
    menuIcon.addEventListener('click',  function (){
    menuContent.classList.toggle('nav__items--visible');
    barIcon.classList.toggle('fa-times');
    })
