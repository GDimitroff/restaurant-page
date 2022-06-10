import createCard from '../components/card';
import image1 from '../assets/imgs/1.jpg';

const featured = [
  {
    name: 'Dishes',
    description: 'Just one drink and go home!',
    imgUrl: image1,
  },
  {
    name: 'Drinks',
    description: 'Delicious food!',
    imgUrl: image1,
  },
  {
    name: 'Dessert',
    description: 'Cake is so awesome!',
    imgUrl: image1,
  },
  {
    name: 'Special',
    description: 'Just one drink and go home!',
    imgUrl: image1,
  },
];

function createMenu() {
  const section = document.createElement('section');
  section.classList.add('menu');

  const cards = document.createElement('div');
  cards.classList.add('cards');
  featured.forEach((item) => {
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
