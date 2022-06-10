import setActiveLink from '../helpers/setActiveLink';
import loadHome from '../modules/home';
import loadMenu from '../modules/menu';

function createNavbar() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const homeButton = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '#';
  homeLink.textContent = 'Home';
  homeButton.appendChild(homeLink);

  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;

    setActiveLink(homeLink);
    loadHome();
  });

  const menuButton = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.href = '#';
  menuLink.textContent = 'Menu';
  menuButton.appendChild(menuLink);

  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;

    setActiveLink(menuLink);
    loadMenu();
  });

  const aboutButton = document.createElement('li');
  const aboutLink = document.createElement('a');
  aboutLink.href = '#';
  aboutLink.textContent = 'About';
  aboutButton.appendChild(aboutLink);

  ul.append(homeButton, menuButton, aboutButton);
  nav.appendChild(ul);

  return nav;
}

export default createNavbar;
