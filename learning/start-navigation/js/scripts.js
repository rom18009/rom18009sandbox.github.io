// function toggleMenu() {
//     // console.log(document.getElementById("primaryNav").classList);
//     document.getElementById("primaryNav").classList.toggle("hide");
// }

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};