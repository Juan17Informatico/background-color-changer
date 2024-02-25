import footer from "./../../html/footer.html?raw";
import nav from "./../../html/nav.html?raw";
import html from "./../../html/content/section1.html?raw";
import { createDiv } from "./createDiv";


export const renderContent = (element) => {
    const navElement = createDiv("nav", "nav");
    const mainElement = createDiv("main", "main");
    const footerElement = createDiv("footer", "footer");

    navElement.innerHTML = nav;
    mainElement.innerHTML = html;
    footerElement.innerHTML = footer;

    element.append(navElement);
    element.append(mainElement);
    element.append(footerElement);
}