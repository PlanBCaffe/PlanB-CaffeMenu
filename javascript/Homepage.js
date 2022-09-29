const mainTitle = document.querySelector("#mainTitle");
const subtitle = document.querySelector("#subTitle");
const menuButton = document.querySelector(".toggleButton");
const homeButton = document.querySelector(".homeButton");

loadText();

function loadText(){
    mainTitle.style.transform = "translateY(0)";
    mainTitle.style.opacity = "1";
    subtitle.style.transform = "translateY(0)";
    subtitle.style.opacity = "1";
    menuButton.style.opacity = "1";
    menuButton.style.transform = "translate(0,0)";
    homeButton.style.opacity = "1";
}