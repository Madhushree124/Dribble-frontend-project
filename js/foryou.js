const filterButtons=document.querySelectorAll(".filter_buttons button");
const filtercards=document.querySelectorAll(".filtercards card");
const filterCards=e=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);
};
filterButtons.forEach(button=>button.addEventListener("click",filterCards));