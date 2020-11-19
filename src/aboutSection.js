const aboutSection = () => {
  const about = document.createElement('section');
  about.className = 'about-section';
  const aboutText = document.createElement('p');
  aboutText.innerHTML = `ForLife is a salad-based restaurant with many different delicious
options to improve your health with zero sacrifice. We have amazing
protein options, for vegetarians and non-vegeterians as well.
Everything is fresh, high-quality and absolutely friendly to your
body. Our variety and our sauces will definitely blow your mind!`;
  about.appendChild(aboutText);

  return about;
};

export default aboutSection;