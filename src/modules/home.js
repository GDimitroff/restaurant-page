import loadMenu from './menu';
import setActiveLink from '../helpers/setActiveLink';

function createHome() {
  const section = document.createElement('section');
  section.classList.add('home');

  const p = document.createElement('p');
  p.textContent = 'Welcome';
  const h1 = document.createElement('h1');
  h1.textContent = 'Passion';

  const hr = document.createElement('hr');

  const pDescription = document.createElement('p');
  pDescription.textContent = 'Taste the passion and surrender to pleasure!';

  const button = document.createElement('button');
  button.textContent = 'Menu';
  button.addEventListener('click', (e) => {
    setActiveLink(document.querySelector('nav ul li:nth-child(2) a'));
    loadMenu();
  });

  section.append(p, h1, hr, pDescription, button);

  return section;
}

function loadHome() {
  const main = document.querySelector('main');
  const home = createHome();

  main.innerHTML = '';
  main.appendChild(home);
}

export default loadHome;
