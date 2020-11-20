const firstSection = () => {
  const first = document.createElement('section');
  first.className = 'first-section';
  const firstH1 = document.createElement('h1');
  firstH1.className = 'slogan';
  firstH1.innerHTML = 'Eating healthier has never been easier!';
  const firstImg = document.createElement('div');
  firstImg.className = 'main-img';
  first.appendChild(firstH1);
  first.appendChild(firstImg);

  return first;
};

export default firstSection;