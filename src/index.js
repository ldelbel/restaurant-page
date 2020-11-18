import nav from "./nav"
import firstSection from "./firstSection"
import aboutSection from "./aboutSection"
import tabsSection from "./tabsSection"
import menu from "./menu"

let content = document.getElementById('content');
content.appendChild(nav());
content.appendChild(firstSection());
content.appendChild(aboutSection());
content.appendChild(tabsSection());

let tabContent = document.getElementByClassName('tab__content');
tabContent.appendChild(menu());


