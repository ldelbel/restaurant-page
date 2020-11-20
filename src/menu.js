const menu = () => {
  const cards = document.createElement('div');
  cards.className = 'cards-content';

  for (let i = 1; i < 10; i += 1) {
    const card = document.createElement('div');
    card.className = `card${i}`;

    const image = document.createElement('div');
    image.className = `cd__img${i}`;

    const caption = document.createElement('div');
    caption.id = `cd__caption${i}`;

    card.appendChild(image);
    card.appendChild(caption);
    cards.appendChild(card);
  }

  return cards;
};

export default menu;