const menus = document.querySelectorAll(".menu");

const study = document.querySelector("#study").offsetTop;
const like = document.querySelector("#like").offsetTop;
const contact = document.querySelector("#contact").offsetTop;

menus[0].onclick = function(){
    window.scroll({top:study, behavior:'smooth'});
}
menus[1].onclick = function(){
    window.scroll({top:like, behavior:'smooth'});
}
menus[2].onclick = function(){
    window.scroll({top:contact, behavior:'smooth'});
}