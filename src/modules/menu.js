function createMenu() {
  const section = document.createElement('section');
  section.classList.add('menu');

  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  section.appendChild(h1);
  return section;
}

function loadMenu() {
  const main = document.querySelector('main');
  const home = createMenu();

  main.innerHTML = '';
  main.appendChild(home);
}

export default loadMenu;
