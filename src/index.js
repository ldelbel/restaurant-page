import nav from "./nav"
import firstSection from "./firstSection"
import aboutSection from "./aboutSection"
import tabsSection from "./tabsSection"

let content = document.getElementById('content');
content.appendChild(nav());
content.appendChild(firstSection());
content.appendChild(aboutSection());
content.appendChild(tabsSection());

let caption1 = document.getElementById('cd__caption1');
let caption2 = document.getElementById('cd__caption2');
let caption3 = document.getElementById('cd__caption3');
let caption4 = document.getElementById('cd__caption4');
let caption5 = document.getElementById('cd__caption5');
let caption6 = document.getElementById('cd__caption6');
let caption7 = document.getElementById('cd__caption7');
let caption8 = document.getElementById('cd__caption8');
let caption9 = document.getElementById('cd__caption9');
caption1.innerHTML = 'Mexican Salad';
caption2.innerHTML = 'Buddha Bowl';
caption3.innerHTML = 'Caesar Salad';
caption4.innerHTML = 'Poke Salad';
caption5.innerHTML = 'Shrimp Bowl';
caption6.innerHTML = 'Italian Salad';
caption7.innerHTML = 'Tropical Fruit Punch';
caption8.innerHTML = 'Red Berries Bowl';
caption9.innerHTML = 'Veggie Burguer';




