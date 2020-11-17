import nav from "./nav"
import firstSection from "./firstSection"
import aboutSection from "./aboutSection"
import tabsSection from "./tabsSection"

let content = document.getElementById('content');
content.appendChild(nav());
content.appendChild(firstSection());
content.appendChild(aboutSection());
content.appendChild(tabsSection());



