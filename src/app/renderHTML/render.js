import footer from "./../../html/footer.html?raw";
import nav from "./../../html/nav.html?raw";
import section1 from "./../../html/content/section1.html?raw";
import section2 from "./../../html/content/section2.html?raw";
import section3 from "./../../html/content/section3.html?raw";
import section4 from "./../../html/content/section4.html?raw";
import { createDiv } from "./createDiv";

const sections = [
    section1,
    section2,
    section3,
    section4
]

export const renderContent = (element) => {
    const navElement = createDiv("nav", "nav");
    const mainElement = createDiv("main", "main");
    const footerElement = createDiv("footer", "footer");
    let sectionArr = [];
    for (let i = 0; i < 4; i++) {
        sectionArr.push(createDiv("section", `section section-${i + 1}`, `section${i + 1}`));
    }

    navElement.innerHTML = nav;
    footerElement.innerHTML = footer;
    sectionArr.forEach((value, i) => {
        value.innerHTML = sections[i];
    });

    // console.log(sectionArr);


    element.append(navElement);
    element.append(mainElement);
    sectionArr.forEach(value => {
        mainElement.append(value);
    });
    element.append(footerElement);
}