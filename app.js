// document.querySelector(".menu").addEventListener("click", function(){
//     document.querySelector(".nav").classList.toggle("active");
// });

let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");

menu.addEventListener("click", ()=>{
    nav.classList.toggle('active');
});

$(".offers").click(function(){
    $(".offers").removeClass("active");
    $(this).addClass("active");
});

// $('.section-seven input').click(function(){
//     $('section-seven input').style.boxShadow = "10px 10px black"
// });