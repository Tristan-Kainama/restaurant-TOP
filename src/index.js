import "./styles.css";
import { addHomePage } from "./home.js";
import { addMenuPage } from "./menu.js";
import { addAboutPage } from "./about.js";

// First is home page
addHomePage();

const contentContainer = document.getElementById('content');
const homeButton = document.getElementById('homeButton');
const menuButton = document.getElementById('menuButton');
const aboutButton = document.getElementById('aboutButton');

homeButton.addEventListener('click', function () {
    contentContainer.textContent = '';
    addHomePage();
});

menuButton.addEventListener('click', function () {
    contentContainer.textContent = '';
    addMenuPage();
});

aboutButton.addEventListener('click', function () {
    contentContainer.textContent = '';
    addAboutPage();
})
