let mode = document.querySelector("header div.right");
let mobile_menu = document.getElementById("mobile-menu");
let spotlight = document.querySelector("#spotlight div.left");
    
let menu_icon = document.getElementById("menu-icon");
let overlay = document.querySelector("#spotlight");
let closebutton = document.querySelector(".close");

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle("active")
    mobile_menu.classList.toggle("active");
    overlay.classList.toggle("active");
    closebutton.classList.toggle("active");
    spotlight.classList.toggle("active");
});
overlay.addEventListener('click', () => {
    menu_icon.classList.remove("active")
    mobile_menu.classList.remove("active");
    overlay.classList.toggle("active");
    closebutton.classList.remove("active");
    spotlight.classList.toggle("active");
});
closebutton.addEventListener('click', () => {
    menu_icon.classList.toggle("active")
    mobile_menu.classList.toggle("active");
    overlay.classList.toggle("active");
    closebutton.classList.toggle("active");
    spotlight.classList.toggle("active");
});

window.addEventListener("scroll", () =>{
    closebutton.classList.remove("active", window.scrollY > 1);
    mobile_menu.classList.remove("active", window.scrollY > 1);
    menu_icon.classList.remove("active", window.scrollY > 1);
    overlay.classList.remove("active", window.scrollY > 1);
    spotlight.classList.remove("active");
})

mode.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("active");
    document.querySelectorAll("#experience ul li div.content p").forEach(element => {
        element.classList.toggle("active");
    });
    document.querySelectorAll("#experience div ul li:last-child").forEach(element => {
        element.classList.toggle("active");
    })
    if(document.querySelector("body").classList.contains("active")){
        mode.innerHTML = `<i class='bx bx-sun'></i> Dark mode`;
    }else{
        mode.innerHTML = `<i class='bx bx-moon'></i> Color mode`;
    }
    document.querySelectorAll("#message div.right form input").forEach(element => {
        element.classList.toggle("active");
    })
    document.querySelector("#message div.right form textarea").classList.toggle("active");
    document.querySelectorAll("footer p").forEach(element => {
        element.classList.toggle("active");
    })
    
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
    });

  });
