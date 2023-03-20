import imgVal from "./assets/images.jpg";
import "./styles/index.css";
const appRoot = document.getElementById("app-root");
// appRoot.innerHTML = "Welcome to first Webpack configuration!!!";
const newImgElem = document.createElement("img");
// const imgVal = "./assets/backgroud-img.jpg";
newImgElem.setAttribute("src", imgVal);
const newSection = document.createElement("section");
const newHeader = document.createElement("h1");
const newText = document.createTextNode(
  "Welcome to webpack-configuration! and another testing test"
);
newHeader.appendChild(newText);
appRoot.appendChild(newHeader);
appRoot.appendChild(newSection);
newSection.appendChild(newImgElem);
