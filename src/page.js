const page = () => {
  const content = document.getElementById('content');

  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.textContent = 'ForLife';
  content.appendChild(nav);

  const firstSection = document.createElement('section');
  firstSection.className = 'first-section';
  const firstSectionH1 = document.createElement('h1');
  firstSectionH1.className = 'slogan';
  firstSectionH1.innerHTML = 'Eating healthier has never been easier!';
  const firstSectionImg = document.createElement('div');
  firstSectionImg.className = 'main-img';
  firstSection.appendChild(firstSectionH1);
  firstSection.appendChild(firstSectionImg);
  content.appendChild(firstSection);


  const aboutSection = document.createElement('section');
  aboutSection.className = 'about-section';
  const aboutSectionText = document.createElement('p');
  aboutSectionText.innerHTML = `ForLife is a salad-based restaurant with many different delicious
    options to improve your health with zero sacrifice. We have amazing
    protein options, for vegetarians and non-vegeterians as well.
    Everything is fresh, high-quality and absolutely friendly to your
    body. Our variety and our sauces will definitely blow your mind!`;
  aboutSection.appendChild(aboutSectionText);
  content.appendChild(aboutSection);

  const tabsSection = document.createElement('section');
  tabsSection.className('tabs-section');
  const tabsWrap = document.createElement('div');
  tabsWrap.className('tabs-wrap');
  const tab1 = document.createElement('input');
  tab1.setAttribute('type', 'radio');
  tab1.className = 'tab';
  tab1.id = 'tab1';
  tab1.name = 'tabGroup1';
  tab1.checked = true;
  const tab2 = document.createElement('input');
  tab1.setAttribute('type', 'radio');
  tab1.className = 'tab';
  tab1.id = 'tab2';
  tab1.name = 'tabGroup1';
  tab1.checked = true;
  const lab1 = document.createElement('label');
  lab1.setAttribute('for', 'tab1');
  const lab2 = document.createElement('label');
  lab1.setAttribute('for', 'tab2');
  const tabContent = document.createElement('div');
  tabContent.className = 'tab__content';

  tabsWrap.appendChild(tab1);
  tabsWrap.appendChild(lab1);
  tabsWrap.appendChild(tab2);
  tabsWrap.appendChild(lab2);
  tabsWrap.appendChild(tabContent);
  tabsSection.appendChild(tabsWrap);
  content.appendChild(tabsSection);

  return content;
};

export default page;