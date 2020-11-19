import nav from "./nav"
import firstSection from "./firstSection"
import aboutSection from "./aboutSection"
import tabsSection from "./tabsSection"
import menu from "./menu"
import contact from "./contact"

let content = document.getElementById('content');
content.appendChild(nav());
content.appendChild(firstSection());
content.appendChild(aboutSection());
content.appendChild(tabsSection());

let tabContent = document.getElementById('tab__content');


let tab1 = document.getElementById('tab1');
tab1.addEventListener('click', () => {
  tabContent.innerHTML = '';
  tabContent.appendChild(menu());

  for(let i = 1; i < 10; i++) {
    let caption = document.getElementById(`cd__caption${i}`);
    switch(i) {
      case 1:
        caption.innerHTML = 'Mexican Salad';
        break;
      case 2:
        caption.innerHTML = 'Buddha Bowl';
        break;
      case 3:
        caption.innerHTML = 'Caesar Salad';
        break;
      case 4:
        caption.innerHTML = 'Poke Salad';
        break;
      case 5:
        caption.innerHTML = 'Shrimp Bowl';
        break;
      case 6:
        caption.innerHTML = 'Italian Salad';
        break;
      case 7:
        caption.innerHTML = 'Tropical Fruit Punch';
        break; 
      case 8:
        caption.innerHTML = 'Red Berries Bowl';
        break;
      case 9:
        caption.innerHTML = 'Veggie Burguer';
        break;
    }
  }
})

let tab2 = document.getElementById('tab2');
tab2.addEventListener('click', () => {
  tabContent.innerHTML = '';
  tabContent.appendChild(contact());
})










