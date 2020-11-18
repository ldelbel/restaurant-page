const menu = () => {

  let cards = document.createElement('div');
  cards.className = 'cards-content';
  
  for(let i = 1; i < 10; i++) {
  let card = document.createElement('div');
  card.className = `card${i}`;

  let image = document.createElement('div');
  image.className = `card${i}__img`;

  let caption = document.createElement('div');
  caption.className = `card${i}__caption`;

  card.appendChild(image);
  card.appendChild(caption);
  cards.appendChild(card);
  }


  return cards;
}

export default menu;