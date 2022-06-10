import createCard from '../components/card';
import dishesImage from '../assets/imgs/dishes.jpg';
import drinksImage from '../assets/imgs/drinks.jpg';
import dessertsImage from '../assets/imgs/desserts.jpg';
import specialImage from '../assets/imgs/special.jpg';

const categories = [
  {
    name: 'Dishes',
    description: 'Careful! Everything is delicious...',
    imgUrl: dishesImage,
  },
  {
    name: 'Drinks',
    description: 'Just one drink and we go home. Yeah, right!',
    imgUrl: drinksImage,
  },
  {
    name: 'Desserts',
    description:
      'This is the big deal. Prepare yourself for the ultimate pleasure!',
    imgUrl: dessertsImage,
  },
  {
    name: 'Special',
    description: 'Let us surprise you...',
    imgUrl: specialImage,
  },
];

function createMenu() {
  const section = document.createElement('section');
  section.classList.add('menu');

  const cards = document.createElement('div');
  cards.classList.add('cards');
  categories.forEach((item) => {
    cards.appendChild(createCard(item));
  });

  section.appendChild(cards);
  return section;
}

function loadMenu() {
  const main = document.querySelector('main');
  const home = createMenu();

  main.innerHTML = '';
  main.appendChild(home);
}

export default loadMenu;
