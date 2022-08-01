// Function to show Menu Bars
let iconBars = document.querySelector(".icon-bars");
let NavMenu = document.querySelector(".navbar");
// Function for Bars and show nav-bar menu
function showMenu() {
  iconBars.classList.toggle("fa-times");
  NavMenu.classList.toggle("active");
}
// <----------------------------------------------------------------------------------------------------------->
// function for remove navbar menu and bars on scroll 
window.onscroll= function () {
    iconBars.classList.remove("fa-times");
    NavMenu.classList.remove("active");
};
// <----------------------------------------------------------------------------------------------------------->
