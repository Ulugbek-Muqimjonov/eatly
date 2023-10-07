const navbarbtn = document.querySelector(".site-header__hamburgerbtn");
const navbarexitbtn = document.querySelector(".site-header__navbar-btn");

navbarbtn.addEventListener("click",() =>{
    document.querySelector(".site-header__navbar").classList.add("navbar");
})
navbarexitbtn.addEventListener("click", () =>{
    document.querySelector(".site-header__navbar").classList.remove ("navbar");
})