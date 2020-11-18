const tabsSection = () => { 
  const tabs = document.createElement("section");
  tabs.className = "tabs-section";
  const tabsWrap = document.createElement("div");
  tabsWrap.className = "tab-wrap";
    const tab1 = document.createElement('input');
      tab1.setAttribute('type','radio');
      tab1.className = 'tab';
      tab1.id = 'tab1';
      tab1.name = 'tabGroup1';        
      tab1.checked = true;
    const tab2 = document.createElement('input');
      tab2.setAttribute('type','radio');
      tab2.className = 'tab';
      tab2.id = 'tab2';
      tab2.name = 'tabGroup1';
      tab2.checked = true;
    const lab1 = document.createElement('label');
      lab1.setAttribute('for','tab1');
      lab1.innerHTML = 'Menu';
    const lab2 = document.createElement('label');
      lab2.setAttribute('for','tab2');
      lab2.innerHTML = 'Contact';
    const tabContent = document.createElement('div');
    tabContent.className = 'tab__content';

  tabsWrap.appendChild(tab1);
  tabsWrap.appendChild(lab1);
  tabsWrap.appendChild(tab2);
  tabsWrap.appendChild(lab2);
  tabsWrap.appendChild(tabContent);  
  tabs.appendChild(tabsWrap);

  return tabs;
}

export default tabsSection;